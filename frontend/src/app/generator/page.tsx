"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowLeft, Upload, LogOut, Search } from "lucide-react";

import { Button } from "../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Textarea } from "../../components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { ResumeUploader } from "../../components/resume-uploader";
import { GeneratedContent } from "../../components/generated-content";
import { ATSScore } from "../../components/ats-score";
import { ProtectedRoute } from "../../components/protected-route";
import { useAuth } from "../../contexts/auth-context";
import { ThemeToggle } from "../../components/theme/theme-toggle";
import { API_URL } from "../../config";

const formSchema = z.object({
  resumeText: z.string().min(1, "Resume text is required"),
  jobDescription: z.string().min(1, "Job description is required"),
  additionalInfo: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

function GeneratorContent() {
  const { user, logout } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [generatedResume, setGeneratedResume] = useState<string>("");
  const [generatedCoverLetter, setGeneratedCoverLetter] = useState<string>("");
  const [atsAnalysis, setATSAnalysis] = useState(null);
  const [activeTab, setActiveTab] = useState<"resume" | "coverLetter">(
    "resume"
  );

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      resumeText: "",
      jobDescription: "",
      additionalInfo: "",
    },
  });

  const handleFileUpload = async (file: File) => {
    setIsLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${API_URL}/api/upload-resume`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload resume");
      }

      const data = await response.json();
      form.setValue("resumeText", data.resume_text);
      toast.success("Resume uploaded and parsed successfully");
    } catch (error) {
      console.error("Error uploading resume:", error);
      toast.error("Failed to upload resume. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const analyzeATS = async () => {
    const values = form.getValues();
    if (!values.resumeText || !values.jobDescription) {
      toast.error(
        "Please provide both resume text and job description for ATS analysis"
      );
      return;
    }

    setIsAnalyzing(true);
    setATSAnalysis(null);

    try {
      const token = localStorage.getItem("token");
      const atsFormData = new FormData();
      atsFormData.append("resume_text", values.resumeText);
      atsFormData.append("job_description", values.jobDescription);

      const atsResponse = await fetch(`${API_URL}/api/analyze-resume`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: atsFormData,
      });

      if (!atsResponse.ok) {
        const errorData = await atsResponse.json();
        throw new Error(errorData.detail || "Failed to analyze resume");
      }

      const atsData = await atsResponse.json();
      setATSAnalysis(atsData.analysis);
      toast.success("ATS analysis completed");
    } catch (error) {
      console.error("Error analyzing resume:", error);
      toast.error(
        `Failed to analyze resume: ${
          error instanceof Error ? error.message : "Please try again"
        }`
      );
    } finally {
      setIsAnalyzing(false);
    }
  };

  const onSubmit = async (values: FormValues) => {
    setIsLoading(true);

    try {
      const token = localStorage.getItem("token");

      // Generate tailored resume
      const resumeFormData = new FormData();
      resumeFormData.append("resume_text", values.resumeText);
      resumeFormData.append("job_description", values.jobDescription);
      if (values.additionalInfo && values.additionalInfo.trim() !== "") {
        resumeFormData.append("additional_info", values.additionalInfo);
      }

      const resumeResponse = await fetch(`${API_URL}/api/generate-resume`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: resumeFormData,
      });

      if (!resumeResponse.ok) {
        const errorData = await resumeResponse.json();
        throw new Error(errorData.detail || "Failed to generate resume");
      }

      const resumeData = await resumeResponse.json();
      setGeneratedResume(resumeData.tailored_resume);

      // Generate cover letter
      const coverLetterFormData = new FormData();
      coverLetterFormData.append("resume_text", values.resumeText);
      coverLetterFormData.append("job_description", values.jobDescription);
      if (values.additionalInfo && values.additionalInfo.trim() !== "") {
        coverLetterFormData.append("additional_info", values.additionalInfo);
      }

      const coverLetterResponse = await fetch(
        `${API_URL}/api/generate-cover-letter`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: coverLetterFormData,
        }
      );

      if (!coverLetterResponse.ok) {
        const errorData = await coverLetterResponse.json();
        throw new Error(errorData.detail || "Failed to generate cover letter");
      }

      const coverLetterData = await coverLetterResponse.json();
      setGeneratedCoverLetter(coverLetterData.cover_letter);

      toast.success("Resume and cover letter generated successfully");
    } catch (error) {
      console.error("Error generating content:", error);
      toast.error(
        `Failed to generate content: ${
          error instanceof Error ? error.message : "Please try again"
        }`
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/30 dark:to-background">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-md dark:bg-blue-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href={`/`}>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-blue-500/80 dark:hover:bg-blue-600/80"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold">AI Resume Generator</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm">Welcome, {user?.username}</span>
            <ThemeToggle />
            <Button
              variant="secondary"
              size="sm"
              onClick={logout}
              className="bg-white text-blue-600 hover:bg-blue-50 dark:bg-blue-900 dark:text-white dark:hover:bg-blue-800"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-8">
            <Card className="border-blue-100 shadow-md dark:border-blue-900/50">
              <CardHeader className="bg-blue-50 border-b border-blue-100 dark:bg-blue-950/20 dark:border-blue-900/50">
                <CardTitle className="text-blue-600 dark:text-blue-400">
                  Resume & Job Details
                </CardTitle>
                <CardDescription>
                  Upload your resume and provide job details to generate
                  tailored content
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4 bg-blue-50/50 border-blue-100 dark:bg-blue-950/10 dark:border-blue-900/30">
                        <h3 className="font-medium mb-2 flex items-center gap-2 text-blue-600 dark:text-blue-400">
                          <Upload className="h-4 w-4" />
                          Upload Resume
                        </h3>
                        <ResumeUploader
                          onFileUpload={handleFileUpload}
                          isLoading={isLoading}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="resumeText"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Resume Text</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Paste your resume text or upload a file above"
                                className="min-h-[160px] max-h-[160px] border-blue-200 dark:border-blue-900/50"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="jobDescription"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Job Description</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Paste the job description here"
                                className="min-h-[160px] max-h-[160px] border-blue-200 dark:border-blue-900/50"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="additionalInfo"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Additional Information (Optional)
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Add any additional information or specific requirements"
                                className="min-h-[80px] max-h-[80px] border-blue-200 dark:border-blue-900/50"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="flex gap-2">
                      <Button
                        type="submit"
                        variant="blue"
                        className="flex-1"
                        disabled={isLoading}
                      >
                        {isLoading
                          ? "Generating..."
                          : "Generate Resume & Cover Letter"}
                      </Button>

                      <Button
                        type="button"
                        variant="blue"
                        className="flex-1"
                        onClick={analyzeATS}
                        disabled={isAnalyzing}
                      >
                        {isAnalyzing ? "Analyzing..." : "Analyze ATS"}
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* ATS Score */}
            <ATSScore analysis={atsAnalysis} isLoading={isAnalyzing} />
          </div>

          {/* Output Section */}
          <div className="space-y-4">
            <div className="flex gap-2 mb-4">
              <Button
                variant={activeTab === "resume" ? "blue" : "ghost"}
                onClick={() => setActiveTab("resume")}
              >
                Resume
              </Button>
              <Button
                variant={activeTab === "coverLetter" ? "blue" : "ghost"}
                onClick={() => setActiveTab("coverLetter")}
              >
                Cover Letter
              </Button>
            </div>

            {activeTab === "resume" ? (
              <GeneratedContent
                content={generatedResume}
                type="resume"
                isLoading={isLoading}
              />
            ) : (
              <GeneratedContent
                content={generatedCoverLetter}
                type="coverLetter"
                isLoading={isLoading}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GeneratorPage() {
  return (
    <ProtectedRoute>
      <GeneratorContent />
    </ProtectedRoute>
  );
}
