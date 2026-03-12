import type { Metadata } from "next";
import { Work_Sans, Inter } from "next/font/google";
import "./globals.css";
import AosInit from "@/components/AosInit";
import PwaInit from "@/components/PwaInit";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Dios Nuestro Padre",
  description: "Iglesia Dios Nuestro Padre – Cultos, palabras y enseñanzas para edificar tu vida.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Dios Nuestro Padre",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
      </head>
      <body className={`${workSans.variable} ${inter.variable} antialiased`}>
        <AosInit />
        <PwaInit />
        {children}
      </body>
    </html>
  );
}
