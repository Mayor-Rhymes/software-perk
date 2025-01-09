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
  title: "NexGenesis",
  description: "Software consulting company",
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
