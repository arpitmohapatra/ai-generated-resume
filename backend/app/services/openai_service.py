from typing import Optional
from openai import AsyncOpenAI
from app.core.config import get_settings

settings = get_settings()

# Check if using a dummy API key
is_dummy_key = settings.OPENAI_API_KEY.startswith('sk-dummy')

# Initialize OpenAI client if not using a dummy key
client = None if is_dummy_key else AsyncOpenAI(api_key=settings.OPENAI_API_KEY)


async def generate_tailored_resume(
    resume_text: str, 
    job_description: str, 
    additional_info: Optional[str] = None
) -> str:
    """
    Generate a tailored resume based on the original resume and job description
    
    Args:
        resume_text: The original resume text
        job_description: The job description to tailor the resume for
        additional_info: Any additional information or instructions
        
    Returns:
        Tailored resume text
    """
    # If using a dummy key, return a mock response
    if is_dummy_key:
        return mock_tailored_resume(resume_text, job_description, additional_info)
    
    prompt = f"""
    You are a professional resume writer. Your task is to tailor the following resume to match the job description provided.
    
    # Original Resume:
    {resume_text}
    
    # Job Description:
    {job_description}
    
    # Instructions:
    1. Rewrite the resume to highlight skills and experiences that match the job description
    2. Keep the same general structure but reorganize sections if needed to emphasize relevant experience
    3. Use action verbs and quantify achievements where possible
    4. Remove or downplay irrelevant information
    5. Maintain a professional tone and format
    6. Return the tailored resume in a clean, professional format
    
    """
    
    if additional_info:
        prompt += f"\n# Additional Information or Instructions:\n{additional_info}\n"
    
    response = await client.chat.completions.create(
        model=settings.OPENAI_MODEL,
        messages=[
            {"role": "system", "content": "You are a professional resume writer who tailors resumes to match job descriptions."},
            {"role": "user", "content": prompt}
        ],
        temperature=0.7,
        max_tokens=4000
    )
    
    return response.choices[0].message.content


async def generate_cover_letter(
    resume_text: str, 
    job_description: str, 
    additional_info: Optional[str] = None
) -> str:
    """
    Generate a cover letter based on the resume and job description
    
    Args:
        resume_text: The resume text
        job_description: The job description
        additional_info: Any additional information or instructions
        
    Returns:
        Generated cover letter text
    """
    # If using a dummy key, return a mock response
    if is_dummy_key:
        return mock_cover_letter(resume_text, job_description, additional_info)
    
    prompt = f"""
    You are a professional cover letter writer. Your task is to create a compelling cover letter based on the resume and job description provided.
    
    # Resume:
    {resume_text}
    
    # Job Description:
    {job_description}
    
    # Instructions:
    1. Create a professional and engaging cover letter
    2. Highlight relevant skills and experiences from the resume that match the job description
    3. Explain why the candidate is a good fit for the position
    4. Keep the tone professional but personable
    5. Structure the letter with a proper greeting, introduction, body paragraphs, and conclusion
    6. Include a call to action in the conclusion
    7. Return the cover letter in a clean, professional format
    
    """
    
    if additional_info:
        prompt += f"\n# Additional Information or Instructions:\n{additional_info}\n"
    
    response = await client.chat.completions.create(
        model=settings.OPENAI_MODEL,
        messages=[
            {"role": "system", "content": "You are a professional cover letter writer who creates compelling cover letters tailored to specific job descriptions."},
            {"role": "user", "content": prompt}
        ],
        temperature=0.7,
        max_tokens=2000
    )
    
    return response.choices[0].message.content


def mock_tailored_resume(resume_text: str, job_description: str, additional_info: Optional[str] = None) -> str:
    """Mock function for development without an OpenAI API key"""
    return f"""
JOHN DOE
Email: john.doe@example.com | Phone: (123) 456-7890 | LinkedIn: linkedin.com/in/johndoe

PROFESSIONAL SUMMARY
Experienced software developer with a strong background in web development and a passion for creating efficient, scalable applications. Skilled in JavaScript, React, and Node.js with a focus on delivering high-quality code and excellent user experiences.

SKILLS
• Programming: JavaScript, TypeScript, Python, HTML5, CSS3
• Frameworks: React, Node.js, Express, Next.js
• Tools: Git, Docker, AWS, Jest, Webpack
• Methodologies: Agile, Scrum, Test-Driven Development

EXPERIENCE
SENIOR FRONTEND DEVELOPER
Tech Solutions Inc. | Jan 2020 - Present
• Led development of responsive web applications using React and TypeScript
• Implemented state management solutions with Redux and Context API
• Collaborated with UX/UI designers to create intuitive user interfaces
• Mentored junior developers and conducted code reviews

FULL STACK DEVELOPER
Digital Innovations | Mar 2017 - Dec 2019
• Developed and maintained multiple web applications using MERN stack
• Designed and implemented RESTful APIs for client-server communication
• Optimized application performance, reducing load times by 40%
• Participated in agile development cycles with bi-weekly sprints

EDUCATION
BACHELOR OF SCIENCE IN COMPUTER SCIENCE
University of Technology | 2013 - 2017
• GPA: 3.8/4.0
• Relevant coursework: Data Structures, Algorithms, Web Development

PROJECTS
E-COMMERCE PLATFORM
• Built a full-stack e-commerce application with React, Node.js, and MongoDB
• Implemented secure payment processing with Stripe API
• Designed responsive UI with Tailwind CSS

TASK MANAGEMENT TOOL
• Developed a collaborative task management application with real-time updates
• Utilized WebSockets for instant communication between users
• Implemented drag-and-drop functionality for intuitive task organization

CERTIFICATIONS
• AWS Certified Developer - Associate
• MongoDB Certified Developer
"""


def mock_cover_letter(resume_text: str, job_description: str, additional_info: Optional[str] = None) -> str:
    """Mock function for development without an OpenAI API key"""
    return """
[Your Name]
[Your Address]
[City, State ZIP]
[Your Email]
[Your Phone]

[Date]

[Hiring Manager's Name]
[Company Name]
[Company Address]
[City, State ZIP]

Dear [Hiring Manager's Name],

I am writing to express my interest in the [Job Title] position at [Company Name] as advertised on [Where You Found the Job]. With my background in [Your Background/Major Field], I am confident that my skills and experience make me an ideal candidate for this role.

During my time at [Current/Previous Company], I have developed expertise in [Relevant Skills/Technologies], which aligns perfectly with the requirements outlined in your job description. I have successfully [Notable Achievement], resulting in [Positive Outcome]. Additionally, my experience with [Relevant Experience] has equipped me with the knowledge needed to make an immediate contribution to your team.

I am particularly drawn to [Company Name] because of your commitment to [Something Specific About the Company That Interests You]. Your company's mission to [Company's Mission] resonates with my professional values, and I am excited about the possibility of contributing to your innovative work in [Industry/Field].

My strong [Relevant Skill] skills, combined with my ability to [Another Relevant Skill], position me well to meet and exceed the expectations for this role. I thrive in fast-paced environments and enjoy collaborating with cross-functional teams to deliver exceptional results.

I would welcome the opportunity to discuss how my background, skills, and experiences would benefit [Company Name]. Thank you for considering my application. I look forward to the possibility of working with your team.

Sincerely,

[Your Name]
""" 