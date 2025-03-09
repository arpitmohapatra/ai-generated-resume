from fastapi import APIRouter, UploadFile, File, Form, HTTPException, Depends
from typing import Optional
from app.services.resume_parser import parse_resume
from app.services.openai_service import generate_tailored_resume, generate_cover_letter
from app.core.config import get_settings

router = APIRouter()

@router.post("/upload-resume")
async def upload_resume(
    file: UploadFile = File(...),
):
    """
    Upload and parse a resume file (PDF, DOCX, TXT, or image)
    """
    try:
        content = await file.read()
        parsed_resume = await parse_resume(content, file.filename)
        return {"success": True, "resume_text": parsed_resume}
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Failed to parse resume: {str(e)}")

@router.post("/generate-resume")
async def generate_resume(
    resume_text: str = Form(...),
    job_description: str = Form(...),
    additional_info: Optional[str] = Form(None),
):
    """
    Generate a tailored resume based on the original resume and job description
    """
    try:
        tailored_resume = await generate_tailored_resume(resume_text, job_description, additional_info)
        return {"success": True, "tailored_resume": tailored_resume}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to generate resume: {str(e)}")

@router.post("/generate-cover-letter")
async def create_cover_letter(
    resume_text: str = Form(...),
    job_description: str = Form(...),
    additional_info: Optional[str] = Form(None),
):
    """
    Generate a cover letter based on the resume and job description
    """
    try:
        cover_letter = await generate_cover_letter(resume_text, job_description, additional_info)
        return {"success": True, "cover_letter": cover_letter}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to generate cover letter: {str(e)}") 