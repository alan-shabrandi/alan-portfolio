import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alan | FullStack + AI Engineer",

  description:
    "Senior FullStack + AI Engineer building scalable software systems with JavaScript, Go and Artificial Intelligence.",

  keywords: [
    "FullStack Engineer",
    "AI Engineer",
    "Go",
    "TypeScript",
    "Next.js",
    "Software Architecture",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}

        h-full
      `}
    >
      <body
        className="
          min-h-full

          bg-[#05070a]

          text-white

          antialiased
        "
      >
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
