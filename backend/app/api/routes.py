from fastapi import APIRouter, UploadFile, File, Form, HTTPException, Depends
from typing import Optional
from app.services.resume_parser import parse_resume
from app.services.openai_service import generate_tailored_resume, generate_cover_letter
from app.services.ats_service import ATSService
from app.core.config import get_settings
from app.core.auth import get_current_active_user, User

router = APIRouter()
ats_service = ATSService()

# Protected route decorator
def require_auth(current_user: User = Depends(get_current_active_user)):
    return current_user

@router.post("/upload-resume")
async def upload_resume(
    file: UploadFile = File(...),
    current_user: User = Depends(require_auth),
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
    current_user: User = Depends(require_auth),
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
    current_user: User = Depends(require_auth),
):
    """
    Generate a cover letter based on the resume and job description
    """
    try:
        cover_letter = await generate_cover_letter(resume_text, job_description, additional_info)
        return {"success": True, "cover_letter": cover_letter}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to generate cover letter: {str(e)}")

@router.post("/analyze-resume")
async def analyze_resume(
    resume_text: str = Form(...),
    job_description: str = Form(...),
    current_user: User = Depends(require_auth),
):
    """
    Analyze resume for ATS optimization
    """
    try:
        analysis = await ats_service.analyze_resume(resume_text, job_description)
        return {"success": True, "analysis": analysis}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to analyze resume: {str(e)}") 