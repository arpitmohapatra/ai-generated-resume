import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "../components/ui/sonner";
import { AuthProvider } from "../contexts/auth-context";
import { ThemeProvider } from "../components/theme/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Resume Generator",
  description: "Generate tailored resumes and cover letters using AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ai-generated-resume/favicon.ico" />
        <base href="/ai-generated-resume/" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <main className="min-h-screen bg-background">
              {children}
              <Toaster position="bottom-right" />
            </main>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
