import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page after 3 seconds
    const timeout = setTimeout(() => {
      router.push("/");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900 p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-slate-600 dark:text-slate-300 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <p className="text-slate-500 dark:text-slate-400 mb-8">
          You will be redirected to the home page in a few seconds...
        </p>
        <Link
          href="/"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Go back to home page
        </Link>
      </div>
    </div>
  );
}
