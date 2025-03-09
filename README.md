# AI Resume Generator

A full-stack application that uses AI to generate tailored resumes and cover letters based on job descriptions. The application allows users to upload their existing resume in various formats (PDF, DOCX, TXT, images) and generates optimized content for specific job applications.

## Live Demo

- **Frontend**: [https://arpitmohapatra.github.io/ai-generated-resume/](https://arpitmohapatra.github.io/ai-generated-resume/)
- **Backend API**: [https://ai-generated-resume.onrender.com](https://ai-generated-resume.onrender.com)

## Features

- Resume parsing from various file formats
- AI-powered resume tailoring based on job descriptions
- Cover letter generation
- Modern, responsive UI with light/dark mode
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

## Deployment

### Backend Deployment

The backend is deployed on [Render](https://render.com) at https://ai-generated-resume.onrender.com.

### Frontend Deployment

The frontend is deployed on GitHub Pages at https://arpitmohapatra.github.io/ai-generated-resume/.

To deploy updates to GitHub Pages:

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Run the deployment script:

   ```bash
   ./deploy.sh
   ```

   Or manually:

   ```bash
   npm run deploy
   ```

## Usage

1. Sign in with the following credentials:
   - Username: `heroictool`
   - Password: `ImissMYc0ff33`
2. Upload your resume or paste its content
3. Enter the job description
4. Add any additional information (optional)
5. Click "Generate Resume & Cover Letter"
6. View, copy, or download the generated content

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
