import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "@/css/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import ThemeProvider from "@/theme/theme-provider";
import { Footer } from "@/components/layout/Footer";
import { AnimatedBackground } from "@/components/animations/AnimatedBackground";

const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: "LAAKAM IT",
  description: "Société de service d'ingénieurie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased flex flex-col min-h-screen text-foreground relative `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <AnimatedBackground />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
