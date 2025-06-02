import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Header from "./components/header";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "Viossa Conlang",
  description:
    "The official website fot viossa, a pidget conlang, made by people speaking many diffrent languages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${notoSans.variable} antialiased bg-viossa-950 min-h-screen`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
