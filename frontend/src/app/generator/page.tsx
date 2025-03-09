"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowLeft, FileText, Upload } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ResumeUploader } from "@/components/resume-uploader";
import { GeneratedContent } from "@/components/generated-content";

const formSchema = z.object({
  resumeText: z.string().min(1, "Resume text is required"),
  jobDescription: z.string().min(1, "Job description is required"),
  additionalInfo: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function GeneratorPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [parsedResume, setParsedResume] = useState<string>("");
  const [generatedResume, setGeneratedResume] = useState<string>("");
  const [generatedCoverLetter, setGeneratedCoverLetter] = useState<string>("");
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
    setResumeFile(file);
    setIsLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:8000/api/upload-resume", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload resume");
      }

      const data = await response.json();
      setParsedResume(data.resume_text);
      form.setValue("resumeText", data.resume_text);
      toast.success("Resume uploaded and parsed successfully");
    } catch (error) {
      console.error("Error uploading resume:", error);
      toast.error("Failed to upload resume. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (values: FormValues) => {
    setIsLoading(true);

    try {
      // Generate tailored resume
      const resumeFormData = new FormData();
      resumeFormData.append("resume_text", values.resumeText);
      resumeFormData.append("job_description", values.jobDescription);
      if (values.additionalInfo) {
        resumeFormData.append("additional_info", values.additionalInfo);
      }

      const resumeResponse = await fetch(
        "http://localhost:8000/api/generate-resume",
        {
          method: "POST",
          body: resumeFormData,
        }
      );

      if (!resumeResponse.ok) {
        throw new Error("Failed to generate resume");
      }

      const resumeData = await resumeResponse.json();
      setGeneratedResume(resumeData.tailored_resume);

      // Generate cover letter
      const coverLetterFormData = new FormData();
      coverLetterFormData.append("resume_text", values.resumeText);
      coverLetterFormData.append("job_description", values.jobDescription);
      if (values.additionalInfo) {
        coverLetterFormData.append("additional_info", values.additionalInfo);
      }

      const coverLetterResponse = await fetch(
        "http://localhost:8000/api/generate-cover-letter",
        {
          method: "POST",
          body: coverLetterFormData,
        }
      );

      if (!coverLetterResponse.ok) {
        throw new Error("Failed to generate cover letter");
      }

      const coverLetterData = await coverLetterResponse.json();
      setGeneratedCoverLetter(coverLetterData.cover_letter);

      toast.success("Resume and cover letter generated successfully");
    } catch (error) {
      console.error("Error generating content:", error);
      toast.error("Failed to generate content. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-slate-900">
              AI Resume Generator
            </h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Resume & Job Details</CardTitle>
                <CardDescription>
                  Upload your resume and provide job details to generate
                  tailored content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4 bg-slate-50">
                        <h3 className="font-medium mb-2 flex items-center gap-2">
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
                                className="min-h-[200px]"
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
                                className="min-h-[200px]"
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
                                placeholder="Add any additional information or specific instructions"
                                className="min-h-[100px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isLoading}
                    >
                      {isLoading
                        ? "Generating..."
                        : "Generate Resume & Cover Letter"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          {/* Output Section */}
          <div>
            <Card className="h-full flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Generated Content</CardTitle>
                  <div className="flex gap-2">
                    <Button
                      variant={activeTab === "resume" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveTab("resume")}
                    >
                      Resume
                    </Button>
                    <Button
                      variant={
                        activeTab === "coverLetter" ? "default" : "outline"
                      }
                      size="sm"
                      onClick={() => setActiveTab("coverLetter")}
                    >
                      Cover Letter
                    </Button>
                  </div>
                </div>
                <CardDescription>
                  {activeTab === "resume"
                    ? "Your tailored resume based on the job description"
                    : "Your personalized cover letter"}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 overflow-auto">
                <GeneratedContent
                  content={
                    activeTab === "resume"
                      ? generatedResume
                      : generatedCoverLetter
                  }
                  type={activeTab}
                  isLoading={isLoading}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
