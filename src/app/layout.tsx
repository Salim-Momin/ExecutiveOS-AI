import type { Metadata } from "next";
import { Inter, Pixelify_Sans } from "next/font/google";
import "./globals.css";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


const pixel = Pixelify_Sans({
  subsets: ["latin"],
  variable: "--font-pixel",
});


export const metadata: Metadata = {
  title: "ExecutiveOS AI",
  description:
    "Your personal AI operating system",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">

      <body
        className={`${inter.variable} ${pixel.variable}`}
      >

        {children}

      </body>

    </html>
  );
}