import type { Metadata } from "next";
import localFont from "next/font/local";
import { Playfair_Display, Montserrat } from 'next/font/google'
import "./globals.css";
import Header from "./cart/components/layout/header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: "AVION",
  description: "Luxury furniture and home accessories",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable} ${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-white">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
