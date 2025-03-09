# AI Resume Generator

A full-stack application that uses AI to generate tailored resumes and cover letters based on job descriptions. The application allows users to upload their existing resume in various formats (PDF, DOCX, TXT, images) and generates optimized content for specific job applications.

## Features

- Resume parsing from various file formats
- AI-powered resume tailoring based on job descriptions
- Cover letter generation
- Modern, responsive UI
- Secure API with OpenAI integration

## Project Structure

This project consists of two main components:

- **Frontend**: A Next.js application with Tailwind CSS and shadcn/ui
- **Backend**: A FastAPI application that handles file parsing and OpenAI integration

## Getting Started

### Prerequisites

- Node.js 18+
- Python 3.8+
- OpenAI API key
- Tesseract OCR (for image parsing)

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Create a virtual environment:

   ```bash
   python -m venv venv
   ```

3. Activate the virtual environment:

   ```bash
   # On Windows
   venv\Scripts\activate

   # On macOS/Linux
   source venv/bin/activate
   ```

4. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

5. Create a `.env` file based on `.env.example` and add your OpenAI API key.

6. Run the server:
   ```bash
   python run.py
   ```

The API will be available at http://localhost:8000.

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. Upload your resume or paste its content
2. Enter the job description
3. Add any additional information (optional)
4. Click "Generate Resume & Cover Letter"
5. View, copy, or download the generated content

## Technologies Used

- **Frontend**:

  - Next.js
  - React
  - Tailwind CSS
  - shadcn/ui
  - TypeScript

- **Backend**:
  - FastAPI
  - OpenAI API
  - PyPDF
  - Tesseract OCR
  - Python

## License

This project is licensed under the MIT License.
