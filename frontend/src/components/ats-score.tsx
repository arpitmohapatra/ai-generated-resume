"use client";

import { AlertCircle, CheckCircle, Info, Search } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Progress } from "./ui/progress";

interface ATSScoreProps {
  analysis: {
    total_score: number;
    formatting_score: number;
    content_score: number;
    formatting_issues: string[];
    missing_keywords: string[];
    improvement_suggestions: string[];
  } | null;
  isLoading: boolean;
}

export function ATSScore({ analysis, isLoading }: ATSScoreProps) {
  if (isLoading) {
    return (
      <Card className="border-blue-100 shadow-md dark:border-blue-900/50">
        <CardHeader className="bg-blue-50 border-b border-blue-100 dark:bg-blue-950/20 dark:border-blue-900/50">
          <CardTitle className="text-blue-600 dark:text-blue-400">
            ATS Analysis
          </CardTitle>
          <CardDescription>Analyzing your resume...</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-blue-100 rounded dark:bg-blue-900/30"></div>
            <div className="h-4 bg-blue-100 rounded w-3/4 dark:bg-blue-900/30"></div>
            <div className="h-4 bg-blue-100 rounded w-1/2 dark:bg-blue-900/30"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!analysis) {
    return (
      <Card className="border-blue-100 shadow-md dark:border-blue-900/50">
        <CardHeader className="bg-blue-50 border-b border-blue-100 dark:bg-blue-950/20 dark:border-blue-900/50">
          <CardTitle className="text-blue-600 dark:text-blue-400">
            ATS Analysis
          </CardTitle>
          <CardDescription>
            Click "Analyze ATS" to check your resume
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <Search className="h-12 w-12 text-blue-300 mb-4 dark:text-blue-700" />
            <p className="text-sm text-slate-500 max-w-md dark:text-slate-400">
              Use the "Analyze ATS" button to check how your resume performs
              with Applicant Tracking Systems.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600 dark:text-green-400";
    if (score >= 60) return "text-yellow-600 dark:text-yellow-400";
    return "text-red-600 dark:text-red-400";
  };

  const getProgressColor = (score: number) => {
    if (score >= 80) return "bg-green-600 dark:bg-green-400";
    if (score >= 60) return "bg-yellow-600 dark:bg-yellow-400";
    return "bg-red-600 dark:bg-red-400";
  };

  return (
    <Card className="border-blue-100 shadow-md dark:border-blue-900/50">
      <CardHeader className="bg-blue-50 border-b border-blue-100 dark:bg-blue-950/20 dark:border-blue-900/50">
        <CardTitle className="text-blue-600 dark:text-blue-400">
          ATS Analysis
        </CardTitle>
        <CardDescription>
          See how your resume performs against ATS systems
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        {/* Overall Score */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">Overall ATS Score</h3>
            <span
              className={`font-bold ${getScoreColor(analysis.total_score)}`}
            >
              {analysis.total_score}%
            </span>
          </div>
          <Progress
            value={analysis.total_score}
            className="h-2"
            indicatorClassName={getProgressColor(analysis.total_score)}
          />
        </div>

        {/* Sub-scores */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-sm font-medium">Formatting</h4>
              <span
                className={`text-sm font-bold ${getScoreColor(
                  analysis.formatting_score
                )}`}
              >
                {analysis.formatting_score}%
              </span>
            </div>
            <Progress
              value={analysis.formatting_score}
              className="h-1.5"
              indicatorClassName={getProgressColor(analysis.formatting_score)}
            />
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-sm font-medium">Content Match</h4>
              <span
                className={`text-sm font-bold ${getScoreColor(
                  analysis.content_score
                )}`}
              >
                {analysis.content_score}%
              </span>
            </div>
            <Progress
              value={analysis.content_score}
              className="h-1.5"
              indicatorClassName={getProgressColor(analysis.content_score)}
            />
          </div>
        </div>

        {/* Issues and Suggestions */}
        <div className="space-y-4">
          {analysis.formatting_issues.length > 0 && (
            <div className="rounded-lg border border-red-100 bg-red-50/50 p-4 dark:border-red-900/50 dark:bg-red-900/10">
              <h4 className="flex items-center gap-2 font-medium text-red-600 dark:text-red-400 mb-2">
                <AlertCircle className="h-4 w-4" />
                Formatting Issues
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-red-600/80 dark:text-red-400/80">
                {analysis.formatting_issues.map((issue, index) => (
                  <li key={index}>{issue}</li>
                ))}
              </ul>
            </div>
          )}

          {analysis.missing_keywords.length > 0 && (
            <div className="rounded-lg border border-yellow-100 bg-yellow-50/50 p-4 dark:border-yellow-900/50 dark:bg-yellow-900/10">
              <h4 className="flex items-center gap-2 font-medium text-yellow-600 dark:text-yellow-400 mb-2">
                <AlertCircle className="h-4 w-4" />
                Missing Keywords
              </h4>
              <div className="flex flex-wrap gap-2">
                {analysis.missing_keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          )}

          {analysis.improvement_suggestions.length > 0 && (
            <div className="rounded-lg border border-green-100 bg-green-50/50 p-4 dark:border-green-900/50 dark:bg-green-900/10">
              <h4 className="flex items-center gap-2 font-medium text-green-600 dark:text-green-400 mb-2">
                <CheckCircle className="h-4 w-4" />
                Improvement Suggestions
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-green-600/80 dark:text-green-400/80">
                {analysis.improvement_suggestions.map((suggestion, index) => (
                  <li key={index}>{suggestion}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
