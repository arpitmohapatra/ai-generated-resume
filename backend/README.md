# AI Resume Generator Backend

This is the backend service for the AI Resume Generator application. It provides APIs for parsing resumes, generating tailored resumes, and creating cover letters using OpenAI.

## Features

- Resume parsing from various formats (PDF, DOCX, TXT, images)
- Tailored resume generation based on job descriptions
- Cover letter generation
- Secure API with environment variable configuration

## Setup

1. Create a virtual environment:

   ```bash
   python -m venv venv
   ```

2. Activate the virtual environment:

   ```bash
   # On Windows
   venv\Scripts\activate

   # On macOS/Linux
   source venv/bin/activate
   ```

3. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Create a `.env` file based on `.env.example` and add your OpenAI API key.

5. Run the server:
   ```bash
   python run.py
   ```

The API will be available at http://localhost:8000.

## API Endpoints

- `POST /api/upload-resume`: Upload and parse a resume file
- `POST /api/generate-resume`: Generate a tailored resume
- `POST /api/generate-cover-letter`: Generate a cover letter

## Requirements

- Python 3.8+
- OpenAI API key
- Tesseract OCR (for image parsing)
