import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Robotics & AV Club",
  description: "Where technology meets creativity! Building smarter, greener solutions for tomorrow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen pt-20 pb-24 sm:pt-24 sm:pb-8">
          {children}
        </main>
      </body>
    </html>
  );
}
