import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import "../app/globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Handle GitHub Pages path issues - but don't create infinite redirects
  useEffect(() => {
    // Only run this code once on initial load
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      const isGitHubPages = window.location.hostname.includes("github.io");
      const hasBasePath = path.startsWith("/ai-generated-resume");

      // Only redirect if we're on GitHub Pages and don't already have the base path
      if (
        isGitHubPages &&
        !hasBasePath &&
        !sessionStorage.getItem("redirected")
      ) {
        // Set a flag to prevent infinite redirects
        sessionStorage.setItem("redirected", "true");
        window.location.href = "/ai-generated-resume" + path;
      }
    }
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
