import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";

// This component is needed to handle path prefixing for GitHub Pages
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Handle GitHub Pages path prefixing
  useEffect(() => {
    // Add a base path to all internal links
    const basePath =
      process.env.NODE_ENV === "production" ? "/ai-generated-resume" : "";

    // Update links to include base path
    const links = document.querySelectorAll('a[href^="/"]');
    links.forEach((link) => {
      const href = link.getAttribute("href");
      if (href && !href.startsWith(basePath) && href !== "/") {
        link.setAttribute("href", `${basePath}${href}`);
      }
    });
  }, [router.asPath]);

  return <Component {...pageProps} />;
}
