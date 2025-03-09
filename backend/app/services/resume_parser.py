import os
import io
import tempfile
from typing import Optional
from pathlib import Path
import pypdf
import docx2txt
import pytesseract
from PIL import Image


async def parse_resume(content: bytes, filename: str) -> str:
    """
    Parse resume content from various file formats
    
    Args:
        content: The file content in bytes
        filename: Original filename with extension
        
    Returns:
        Extracted text from the resume
    """
    file_ext = Path(filename).suffix.lower()
    
    # PDF parsing
    if file_ext == '.pdf':
        return await _parse_pdf(content)
    
    # Word document parsing
    elif file_ext in ['.docx', '.doc']:
        return await _parse_docx(content)
    
    # Plain text parsing
    elif file_ext in ['.txt', '.text']:
        return content.decode('utf-8', errors='ignore')
    
    # Image parsing (JPG, PNG, etc.)
    elif file_ext in ['.jpg', '.jpeg', '.png', '.bmp', '.tiff', '.gif']:
        return await _parse_image(content)
    
    else:
        raise ValueError(f"Unsupported file format: {file_ext}")


async def _parse_pdf(content: bytes) -> str:
    """Parse text from PDF file"""
    with tempfile.NamedTemporaryFile(suffix='.pdf', delete=False) as temp_file:
        temp_file.write(content)
        temp_path = temp_file.name
    
    try:
        text = ""
        with open(temp_path, 'rb') as file:
            reader = pypdf.PdfReader(file)
            for page in reader.pages:
                text += page.extract_text() + "\n"
        return text
    finally:
        os.unlink(temp_path)


async def _parse_docx(content: bytes) -> str:
    """Parse text from DOCX file"""
    with tempfile.NamedTemporaryFile(suffix='.docx', delete=False) as temp_file:
        temp_file.write(content)
        temp_path = temp_file.name
    
    try:
        text = docx2txt.process(temp_path)
        return text
    finally:
        os.unlink(temp_path)


async def _parse_image(content: bytes) -> str:
    """Parse text from image using OCR"""
    image = Image.open(io.BytesIO(content))
    text = pytesseract.image_to_string(image)
    return text 