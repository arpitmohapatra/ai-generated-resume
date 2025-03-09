import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-900">
            AI Resume Generator
          </h1>
          <nav>
            <Link href="/generator">
              <Button variant="outline">Get Started</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-16 bg-gradient-to-b from-white to-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Tailor Your Resume with AI
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Upload your resume and job description to generate a perfectly
            tailored resume and cover letter in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/generator">
              <Button size="lg" className="px-8">
                Create Your Resume
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Upload Your Resume</h3>
              <p className="text-slate-600">
                Upload your existing resume in any format (PDF, Word, text, or
                even an image).
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Add Job Description
              </h3>
              <p className="text-slate-600">
                Paste the job description you're applying for to tailor your
                resume to the specific role.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Get Tailored Results
              </h3>
              <p className="text-slate-600">
                Receive a professionally tailored resume and cover letter
                optimized for the job you want.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>
            © {new Date().getFullYear()} AI Resume Generator. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
