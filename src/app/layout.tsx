import type { Metadata } from 'next';

import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { alegreya, inter } from '@/lib/fonts';
import { Toaster } from '@/components/ui/sonner';


export const metadata: Metadata = {
  title: 'Software Perk',
  description: 'Software development company',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-white ${inter.className} ${alegreya.className} font-sans`}
      >
        <Navbar />

        {children}
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
