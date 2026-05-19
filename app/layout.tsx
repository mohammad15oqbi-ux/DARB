import type { Metadata } from "next";
import "./globals.css";
import HeaderClient from "./header-client";
import Footer from "./footer";

export const metadata: Metadata = {
  title: "منصة درب التعليمية",
  description: "منصة تعليمية للدورات التقنية والمهنية",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="font-[Cairo] bg-white text-[#0A3A6B] overflow-x-hidden m-0 p-0 flex flex-col min-h-screen">
        <HeaderClient />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}