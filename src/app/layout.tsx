import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Source_Code_Pro } from "next/font/google";
import { Github } from "lucide-react";
import { Header } from "@/components/header";
import { IsometricBackground } from "@/components/isometric-background";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "alexburry",
  description: "The personal website of Alex Burry",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceCodePro.className} antialiased flex flex-col h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <IsometricBackground />

          <Header />

          <main className="grow flex flex-col items-center justify-center mx-4">
            {children}
          </main>
          <footer className="flex space-x-2 justify-center items-center mb-2 mx-2">
            <p>Made by alexburry</p>
            <a href="https://github.com/alexburry">
              <Github className="h-4 w-4" />
            </a>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
