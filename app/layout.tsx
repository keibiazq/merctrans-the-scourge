import type { Metadata } from "next";
import "./globals.css";
import { Rufina, Luxurious_Script } from "next/font/google";
import { Header } from "./components/header";


const rufina = Rufina({
  weight: '400', // Specify weights you need
  subsets: ['latin'], // Specify subsets if required
  variable: '--font-rufina'
});

const luxurious = Luxurious_Script({
  weight: '400', // Specify weights you need
  subsets: ['latin'], // Specify subsets if required
  variable: '--font-luxurious'
});


export const metadata: Metadata = {
  title: "MercTrans and The Scourge",
  description: "MercTrans and The Scourge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rufina.variable} ${luxurious.variable}`}>
      <body
        className={`${rufina.className} text-[#CDCDCD]`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
