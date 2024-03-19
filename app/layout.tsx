import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Providers from "./themes/ThemeProvider"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ochuko's PortFolio",
  description: "This is the website of Ochuko Whoro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
     
        <Providers>
        {children}
        </Providers>
        </body>
    </html>
  );
}
