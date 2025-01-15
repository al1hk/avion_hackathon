import type { Metadata } from "next";
import localFont from "next/font/local";
import { Playfair_Display, Montserrat } from 'next/font/google'
import "./globals.css";
import Header from "./cart/components/layout/header";
<<<<<<< HEAD
import { CartProvider } from './context/CartContext'
=======
>>>>>>> 848b3f81c51772111978b450a37cafa92527f503

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
<<<<<<< HEAD
        <CartProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
        </CartProvider>
=======
        <Header />
        <main className="flex-grow">
          {children}
        </main>
>>>>>>> 848b3f81c51772111978b450a37cafa92527f503
      </body>
    </html>
  );
}
