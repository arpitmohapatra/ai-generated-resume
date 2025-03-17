"use client";

import { Copy, Download, FileText } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button } from "../components/ui/button";
import { toast } from "sonner";
import { saveAs } from "file-saver";
import { Document, Packer, Paragraph, TextRun, HeadingLevel } from "docx";

interface GeneratedContentProps {
  content: string;
  type: "resume" | "coverLetter";
  isLoading: boolean;
}

// Custom components for ReactMarkdown
const MarkdownComponents = {
  h1: (props: any) => (
    <h1
      className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2
      className="text-xl font-bold mt-6 mb-3 text-blue-600 dark:text-blue-400"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3
      className="text-lg font-bold mt-5 mb-2 text-blue-600 dark:text-blue-400"
      {...props}
    />
  ),
  p: (props: any) => <p className="mb-4" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-5 mb-4" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-5 mb-4" {...props} />,
  li: (props: any) => <li className="mb-1" {...props} />,
  a: (props: any) => (
    <a
      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
      {...props}
    />
  ),
  blockquote: (props: any) => (
    <blockquote
      className="border-l-4 border-blue-300 dark:border-blue-700 pl-4 italic my-4"
      {...props}
    />
  ),
  code: (props: any) => {
    const { children, className } = props;
    const match = /language-(\w+)/.exec(className || "");
    return match ? (
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto mb-4">
        <code className="font-mono text-sm">{children}</code>
      </pre>
    ) : (
      <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded-sm font-mono text-sm">
        {children}
      </code>
    );
  },
  pre: (props: any) => (
    <pre
      className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto mb-4"
      {...props}
    />
  ),
  table: (props: any) => (
    <table className="w-full border-collapse mb-4" {...props} />
  ),
  th: (props: any) => (
    <th
      className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 px-4 py-2 text-left"
      {...props}
    />
  ),
  td: (props: any) => (
    <td
      className="border border-blue-200 dark:border-blue-800 px-4 py-2"
      {...props}
    />
  ),
  hr: (props: any) => (
    <hr
      className="border-t border-blue-200 dark:border-blue-800 my-6"
      {...props}
    />
  ),
};

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
    // Create a Word document
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: convertMarkdownToDocx(content),
        },
      ],
    });

    // Generate the Word document as a blob
    Packer.toBlob(doc)
      .then((blob) => {
        // Save the blob as a file
        saveAs(
          blob,
          type === "resume" ? "tailored-resume.docx" : "cover-letter.docx"
        );
        toast.success(
          `${
            type === "resume" ? "Resume" : "Cover Letter"
          } downloaded as Word document`
        );
      })
      .catch((error) => {
        console.error("Error generating Word document:", error);
        toast.error(
          "Failed to generate Word document. Falling back to text download."
        );

        // Fallback to text download if Word generation fails
        const element = document.createElement("a");
        const file = new Blob([content], { type: "text/plain" });
        element.href = URL.createObjectURL(file);
        element.download =
          type === "resume" ? "tailored-resume.txt" : "cover-letter.txt";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
      });
  };

  // Helper function to convert markdown to docx elements
  const convertMarkdownToDocx = (markdownText: string) => {
    const elements: Paragraph[] = [];

    // Split the content by lines
    const lines = markdownText.split("\n");

    let inList = false;
    let currentSection: string | null = null;

    // Process lines
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();

      // Skip empty lines but add paragraph spacing
      if (!trimmedLine) {
        elements.push(new Paragraph({}));
        continue;
      }

      // Headings with proper formatting
      if (trimmedLine.startsWith("# ")) {
        currentSection = trimmedLine.substring(2);
        elements.push(
          new Paragraph({
            text: currentSection,
            heading: HeadingLevel.HEADING_1,
            thematicBreak: true,
            spacing: {
              after: 200,
              before: 400,
            },
            border: {
              bottom: {
                color: "auto",
                space: 1,
                style: "single",
                size: 6,
              },
            },
          })
        );
      } else if (trimmedLine.startsWith("## ")) {
        elements.push(
          new Paragraph({
            text: trimmedLine.substring(3),
            heading: HeadingLevel.HEADING_2,
            spacing: {
              after: 120,
              before: 240,
            },
          })
        );
      } else if (trimmedLine.startsWith("### ")) {
        elements.push(
          new Paragraph({
            text: trimmedLine.substring(4),
            heading: HeadingLevel.HEADING_3,
            spacing: {
              after: 80,
              before: 160,
            },
          })
        );
      }
      // List items with proper bullet formatting
      else if (trimmedLine.startsWith("- ") || trimmedLine.startsWith("* ")) {
        // Extract the content after the bullet marker and create a bullet paragraph
        const itemContent = trimmedLine.substring(2).trim();

        // Create a bullet paragraph with the content
        elements.push(
          new Paragraph({
            bullet: { level: 0 },
            children: formatTextWithStyles(itemContent),
            spacing: {
              after: 80,
              before: 80,
            },
          })
        );
      }
      // Regular paragraph with proper formatting
      else {
        // Create paragraph with proper spacing
        elements.push(
          new Paragraph({
            children: formatTextWithStyles(trimmedLine),
            spacing: {
              after: 120,
              line: 360, // 1.5 line spacing
            },
          })
        );
      }
    }

    return elements;
  };

  // Helper function to format text with styles (bold, italic)
  const formatTextWithStyles = (text: string): TextRun[] => {
    const runs: TextRun[] = [];
    let currentIndex = 0;

    // Process bold and italic formatting
    const regex = /(\*\*.*?\*\*|\*.*?\*)/g;
    let match;

    while ((match = regex.exec(text)) !== null) {
      // Add text before the formatted part
      if (match.index > currentIndex) {
        runs.push(
          new TextRun({
            text: text.substring(currentIndex, match.index),
          })
        );
      }

      const content = match[0];

      // Handle bold text (**text**)
      if (content.startsWith("**") && content.endsWith("**")) {
        runs.push(
          new TextRun({
            text: content.substring(2, content.length - 2),
            bold: true,
          })
        );
      }
      // Handle italic text (*text*)
      else if (content.startsWith("*") && content.endsWith("*")) {
        runs.push(
          new TextRun({
            text: content.substring(1, content.length - 1),
            italics: true,
          })
        );
      }

      currentIndex = match.index + match[0].length;
    }

    // Add any remaining text
    if (currentIndex < text.length) {
      runs.push(
        new TextRun({
          text: text.substring(currentIndex),
        })
      );
    }

    // If no formatting was found, just return the original text
    if (runs.length === 0) {
      runs.push(new TextRun({ text }));
    }

    return runs;
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
          Download Word
        </Button>
      </div>
      <div className="bg-white border border-blue-100 rounded-md p-6 shadow-sm dark:bg-slate-900 dark:border-blue-900/50 markdown-content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={MarkdownComponents}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
