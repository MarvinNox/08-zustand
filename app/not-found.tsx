"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import css from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
  openGraph: {
    title: "Page Not Found",
    description: "The page you are looking for does not exist.",
    url: "https://note-hub.vercel.app/not-found",
    siteName: "NoteHub",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "Page Not Found",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Page Not Found",
    description: "The page you are looking for does not exist.",
    images: ["https://ac.goit.global/fullstack/react/notehub-og-meta.jpg"],
  },
};

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const fallBackTimer = setTimeout(() => router.back(), 4000);
    return () => clearTimeout(fallBackTimer);
  }, [router]);

  return (
    <div className="center">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you&#39;re looking for doesn&#39;t exist.</p>
      <button onClick={() => router.push("/")} className={css.homeButton}>
        Go home
      </button>
    </div>
  );
}
