import type {Metadata} from "next";

import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Restaurancy",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] bg-gray-50 px-4 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <Link href="/">
          <header className="transform text-center text-2xl font-extrabold leading-[3rem] text-amber-300 drop-shadow-xl transition-transform hover:scale-105 dark:text-blue-400">
            Restaurancy
          </header>
        </Link>
        <main className="py-8">{children}</main>
        <footer className="text-center leading-[3rem] text-gray-700 opacity-70 dark:text-gray-300">
          © {new Date().getFullYear()} Restaurancy
        </footer>
      </body>
    </html>
  );
}
