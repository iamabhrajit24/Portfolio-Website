import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Abhrajit Chakraborty | Building Intelligent Systems",
  description: "Full stack web developer, designer, and AI enthusiast. Explore my projects and experience.",
  keywords: ["Abhrajit Chakraborty", "Portfolio", "Web Developer", "AI Developer", "React", "Next.js"],
};

export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body suppressHydrationWarning className={`${inter.variable} ${outfit.variable} font-sans bg-background text-foreground antialiased min-h-screen flex flex-col overflow-x-hidden`}>
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
