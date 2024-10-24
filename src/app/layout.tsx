import type { Metadata } from "next";
import Link from "next/link";

import ".//globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Source_Code_Pro } from "next/font/google";
import { Github } from "lucide-react";
import ThemeSwitcher from "./_components/theme-switcher";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "alexburry",
  description: "The personal website of the one and only, Alex Burry",
  icons: {
    icon: "/favicon.ico",
  },
};

<link rel="icon" href="/favicon.ico" sizes="any" />;

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
          <div className="flex justify-between pt-4 px-4">
            <span>
              <Link href="/">Alex Burry</Link>
            </span>
            <ThemeSwitcher />
          </div>

          <main className="flex-grow flex flex-col items-center justify-center mx-4">
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
