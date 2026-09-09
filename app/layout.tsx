import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shaik Khadar Ahamad | Software Engineer",
  description:
    "Portfolio of Shaik Khadar Ahamad — Software Engineer focused on backend, full-stack development, and AI.",
  keywords: [
    "Shaik Khadar Ahamad",
    "Software Engineer",
    "Backend Developer",
    "Full-Stack Developer",
    "Java",
    "Spring Boot",
    "AI",
    "Next.js",
  ],
  authors: [
    {
      name: "Shaik Khadar Ahamad",
    },
  ],
  creator: "Shaik Khadar Ahamad",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}