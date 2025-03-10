export default function NotFound() {
  return (
    <html>
      <head>
        <title>Page Not Found</title>
        <meta httpEquiv="refresh" content="0;url=/ai-generated-resume" />
      </head>
      <body>
        <p>Redirecting to home page...</p>
      </body>
    </html>
  );
}

// This ensures the page is static and doesn't use client-side features
export const dynamic = "force-static";
