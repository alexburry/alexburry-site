import type { Metadata } from "next";

import ".//globals.css";
import { Source_Code_Pro } from "@next/font/google";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// const roboto = Roboto({
//   subsets: ["latin"],
//   weight: ["400", "700"],
// });

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
        <main className="flex-grow flex flex-col items-center justify-center  mx-4">
          {children}
        </main>
        <footer className="flex space-x-2 justify-center mb-2 mx-2">
          <p>Made by alexburry</p>
          <a href="https://github.com/alexburry">
            <svg width="24" height="24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z"
                fill="#808080"
              />
            </svg>
          </a>
        </footer>
      </body>
    </html>
  );
}
