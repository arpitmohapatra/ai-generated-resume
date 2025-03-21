from typing import Dict, List, Tuple
import re
from collections import Counter
import nltk
from nltk.corpus import stopwords

# Download NLTK stopwords data
try:
    nltk.data.find('corpora/stopwords')
except LookupError:
    nltk.download('stopwords', quiet=True)

class ATSService:
    def __init__(self):
        self.formatting_weights = {
            'has_images': -10,
            'has_columns': -5,
            'bullet_points': 5,
            'section_headers': 5,
            'contact_info': 5,
            'proper_spacing': 3,
        }
        
        self.content_weights = {
            'keyword_match': 30,
            'experience_match': 25,
            'education_match': 15,
            'skills_match': 20,
            'achievements': 10,
        }
        
        # Get English stopwords from NLTK
        self.stop_words = set(stopwords.words('english'))
        
        # Add additional domain-specific stopwords
        additional_stops = {
            'resume', 'job', 'description', 'experience', 'work', 'company',
            'position', 'role', 'responsibilities', 'required', 'preferred',
            'skills', 'qualifications', 'education', 'university', 'college',
            'apply', 'candidate', 'applicant', 'email', 'contact', 'phone'
        }
        self.stop_words.update(additional_stops)

    async def analyze_resume(self, resume_text: str, job_description: str) -> Dict:
        """
        Analyze resume against job description for ATS optimization
        """
        # Calculate formatting score
        formatting_score, formatting_issues = self._check_formatting(resume_text)
        
        # Calculate content matching score
        content_score, missing_keywords = self._analyze_content_match(resume_text, job_description)
        
        # Calculate total score (weighted average)
        total_score = (formatting_score * 0.4) + (content_score * 0.6)
        
        return {
            'total_score': round(total_score, 1),
            'formatting_score': round(formatting_score, 1),
            'content_score': round(content_score, 1),
            'formatting_issues': formatting_issues,
            'missing_keywords': missing_keywords,
            'improvement_suggestions': self._generate_suggestions(formatting_issues, missing_keywords)
        }

    def _check_formatting(self, resume_text: str) -> Tuple[float, List[str]]:
        """
        Check resume formatting and return score and issues
        """
        issues = []
        score = 100  # Start with perfect score and deduct based on issues
        
        # Check for images (indicated by base64 or image file extensions)
        if re.search(r'(data:image\/[^;]+;base64|\.jpg|\.png|\.gif|\.jpeg)', resume_text, re.I):
            score += self.formatting_weights['has_images']
            issues.append("Contains images that may not be parsed by ATS")

        # Check for complex formatting (potential columns)
        if re.search(r'(\t{2,}|\s{8,})', resume_text):
            score += self.formatting_weights['has_columns']
            issues.append("Contains possible column layouts")

        # Check for bullet points
        if not re.search(r'[•\-\*]', resume_text):
            score += self.formatting_weights['bullet_points']
            issues.append("Missing bullet points for better readability")

        # Check for section headers
        if not re.search(r'(EXPERIENCE|EDUCATION|SKILLS|SUMMARY)', resume_text.upper()):
            score += self.formatting_weights['section_headers']
            issues.append("Missing clear section headers")

        # Check for contact information
        if not re.search(r'([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}|(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4})', resume_text):
            score += self.formatting_weights['contact_info']
            issues.append("Missing or improperly formatted contact information")

        # Normalize score between 0 and 100
        score = max(0, min(100, score))
        return score, issues

    def _analyze_content_match(self, resume_text: str, job_description: str) -> Tuple[float, List[str]]:
        """
        Analyze content matching between resume and job description
        """
        score = 0
        job_keywords = self._extract_keywords(job_description)
        resume_keywords = self._extract_keywords(resume_text)
        
        # Find missing important keywords
        missing_keywords = [k for k in job_keywords if k not in resume_keywords]
        
        # Calculate keyword match score
        keyword_match_ratio = len(set(job_keywords) & set(resume_keywords)) / len(job_keywords) if job_keywords else 0
        score += keyword_match_ratio * self.content_weights['keyword_match']
        
        # Check for experience descriptions
        if re.search(r'(\d+\s+years?|experience in)', resume_text, re.I):
            score += self.content_weights['experience_match']
            
        # Check for education section
        if re.search(r'(bachelor|master|ph\.?d|degree|university|college)', resume_text, re.I):
            score += self.content_weights['education_match']
            
        # Check for skills section
        if re.search(r'(skills?|technologies|tools|programming|software)', resume_text, re.I):
            score += self.content_weights['skills_match']
            
        # Check for quantifiable achievements
        if re.search(r'(\d+%|\$\d+|\d+\s*(users?|customers?|clients?|projects?))', resume_text, re.I):
            score += self.content_weights['achievements']
            
        return score, missing_keywords

    def _extract_keywords(self, text: str) -> List[str]:
        """
        Extract important keywords from text using NLTK stopwords
        """
        # Remove special characters and convert to lowercase
        text = re.sub(r'[^\w\s]', ' ', text.lower())
        words = text.split()
        
        # Filter out stopwords using NLTK's standard stopwords list
        words = [w for w in words if w not in self.stop_words]
        
        # Get word frequency
        word_freq = Counter(words)
        
        # Remove single-character words and digits-only words
        keywords = [word for word, freq in word_freq.most_common(30) 
                   if len(word) > 1 and not word.isdigit()]
        
        # Return most common words (keywords)
        return keywords[:20]

    def _generate_suggestions(self, formatting_issues: List[str], missing_keywords: List[str]) -> List[str]:
        """
        Generate improvement suggestions based on issues found
        """
        suggestions = []
        
        # Add formatting suggestions
        for issue in formatting_issues:
            if "images" in issue:
                suggestions.append("Remove images and use text descriptions instead")
            elif "columns" in issue:
                suggestions.append("Use a single-column layout for better ATS compatibility")
            elif "bullet points" in issue:
                suggestions.append("Use bullet points to list achievements and responsibilities")
            elif "headers" in issue:
                suggestions.append("Add clear section headers (Experience, Education, Skills, etc.)")
            elif "contact" in issue:
                suggestions.append("Include properly formatted contact information at the top")

        # Add keyword-related suggestions
        if missing_keywords:
            suggestions.append(f"Add these missing keywords from the job description: {', '.join(missing_keywords[:5])}")
            suggestions.append("Incorporate keywords naturally into your experience descriptions")

        return suggestions 