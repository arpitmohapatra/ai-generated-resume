"use client";

import { Copy, Download, FileText } from "lucide-react";
import { Button } from "../components/ui/button";
import { toast } from "sonner";

interface GeneratedContentProps {
  content: string;
  type: "resume" | "coverLetter";
  isLoading: boolean;
}

export function GeneratedContent({
  content,
  type,
  isLoading,
}: GeneratedContentProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    toast.success("Content copied to clipboard");
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([content], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download =
      type === "resume" ? "tailored-resume.txt" : "cover-letter.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-12">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="h-8 w-8 bg-blue-200 rounded-full dark:bg-blue-800/50"></div>
          <div className="h-4 w-48 bg-blue-200 rounded dark:bg-blue-800/50"></div>
          <div className="h-3 w-36 bg-blue-200 rounded dark:bg-blue-800/50"></div>
        </div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-12 text-center">
        <FileText className="h-12 w-12 text-blue-300 mb-4 dark:text-blue-700" />
        <h3 className="text-lg font-medium text-slate-700 mb-2 dark:text-slate-300">
          {type === "resume"
            ? "No Resume Generated Yet"
            : "No Cover Letter Generated Yet"}
        </h3>
        <p className="text-sm text-slate-500 max-w-md dark:text-slate-400">
          Fill out the form and click &quot;Generate&quot; to create your
          tailored {type === "resume" ? "resume" : "cover letter"}.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={handleCopy}
          className="border-blue-200 bg-blue-50/50 hover:bg-blue-100/50 dark:border-blue-800 dark:bg-blue-900/20 dark:hover:bg-blue-900/30"
        >
          <Copy className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
          Copy
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={handleDownload}
          className="border-blue-200 bg-blue-50/50 hover:bg-blue-100/50 dark:border-blue-800 dark:bg-blue-900/20 dark:hover:bg-blue-900/30"
        >
          <Download className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
          Download
        </Button>
      </div>
      <div className="bg-white border border-blue-100 rounded-md p-6 whitespace-pre-wrap font-mono text-sm shadow-sm dark:bg-slate-900 dark:border-blue-900/50">
        {content}
      </div>
    </div>
  );
}
