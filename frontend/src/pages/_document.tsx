import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  // Get the base path from environment or default to empty string
  const basePath =
    process.env.NODE_ENV === "production" ? "/ai-generated-resume" : "";

  return (
    <Html lang="en">
      <Head>
        {/* Add base tag to help with relative URLs */}
        <base href={`${basePath}/`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
