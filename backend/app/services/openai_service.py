from typing import Optional
from openai import AsyncOpenAI
from app.core.config import get_settings

settings = get_settings()
client = AsyncOpenAI(api_key=settings.OPENAI_API_KEY)


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