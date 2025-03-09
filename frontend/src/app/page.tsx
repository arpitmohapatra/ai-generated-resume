import Link from "next/link";
import { Button } from "../components/ui/button";
import { ThemeToggle } from "../components/theme/theme-toggle";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-blue-50 border-b border-blue-100 dark:bg-blue-950/30 dark:border-blue-900">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            AI Resume Generator
          </h1>
          <nav className="flex gap-4 items-center">
            <ThemeToggle />
            <Link href={`login`}>
              <Button
                variant="outline"
                className="border-blue-200 hover:bg-blue-50 dark:border-blue-800 dark:hover:bg-blue-900/50"
              >
                Sign In
              </Button>
            </Link>
            <Link href={`generator`}>
              <Button variant="blue">Get Started</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-16 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/30 dark:to-background">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Tailor Your Resume with{" "}
            <span className="text-blue-600 dark:text-blue-400">AI</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Upload your resume and job description to generate a perfectly
            tailored resume and cover letter in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`login`}>
              <Button variant="blue" size="lg" className="px-8">
                Create Your Resume
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-600 dark:text-blue-400">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 shadow-sm dark:bg-blue-950/20 dark:border-blue-900/50">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold dark:bg-blue-500">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                Upload Your Resume
              </h3>
              <p className="text-muted-foreground">
                Upload your existing resume in any format (PDF, Word, text, or
                even an image).
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 shadow-sm dark:bg-blue-950/20 dark:border-blue-900/50">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold dark:bg-blue-500">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                Add Job Description
              </h3>
              <p className="text-muted-foreground">
                Paste the job description you&apos;re applying for to tailor
                your resume to the specific role.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 shadow-sm dark:bg-blue-950/20 dark:border-blue-900/50">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold dark:bg-blue-500">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                Get Tailored Results
              </h3>
              <p className="text-muted-foreground">
                Receive a professionally tailored resume and cover letter
                optimized for the job you want.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-8 dark:bg-blue-800">
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
