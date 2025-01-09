import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { alegreya } from "@/lib/fonts";
import { Toaster } from "@/components/ui/sonner";
import ErrorBoundary from "./error-boundary";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react"


export const metadata: Metadata = {
  title: "NexGenesis | Leading Software Consulting for Digital Transformation",
  description: "NexGenesis is a top-tier software consulting company specializing in custom software development, digital transformation, and innovative tech solutions to empower businesses.",
  keywords: "software consulting, custom software development, digital transformation, tech solutions, business growth, software innovation, NexGenesis",
  authors: [{ name: "Gabriel Ogbera" }],
  openGraph: {
    title: "NexGenesis | Leading Software Consulting for Digital Transformation",
    description: "NexGenesis provides innovative software solutions for businesses looking to digitally transform and thrive in the digital age.",
    url: "https://nexgenesis.dev",
    type: "website",
    images: [
      {
        url: "/images/NexGenesisSeo", 
        width: 1200,
        height: 630,
        alt: "NexGenesis - Software Consulting"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "NexGenesis | Leading Software Consulting for Digital Transformation",
    description: "NexGenesis is your trusted partner for custom software development, digital transformation, and business innovation.",
    creator: "@nexgenesis"
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${alegreya.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ErrorBoundary>
            <Navbar />
            {children}
            <Footer />
            <Analytics />
            <Toaster position="top-right" />
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  );
}
