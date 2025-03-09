import type { AppProps } from "next/app";
import "../app/globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
