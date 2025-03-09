/**
 * Application configuration
 */

// Base API URL - automatically switches between production and development
export const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  (process.env.NODE_ENV === "production"
    ? "https://ai-generated-resume.onrender.com"
    : "http://localhost:8000");

// GitHub Pages base path for production
export const BASE_PATH =
  process.env.NODE_ENV === "production" ? "/ai-generated-resume" : "";

// Function to get the correct path for assets
export const getAssetPath = (path: string): string => {
  if (path.startsWith("/")) {
    return `${BASE_PATH}${path}`;
  }
  return path;
};

// Application settings
export const APP_CONFIG = {
  name: "AI Resume Generator",
  description: "Generate tailored resumes and cover letters using AI",
  github: "https://github.com/arpitmohapatra/ai-generated-resume",
  version: "1.0.0",
};
