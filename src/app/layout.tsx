import type { Metadata } from "next";
import { Geist, Geist_Mono, Laila, Roboto, Rubik } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: "400"
})

const laila = Laila({
variable: "--laila",
weight: "400"

})

export const metadata: Metadata = {
  title: "Stocks confidence App",
  description: "App to help ypu to gain confidence investing in Stocks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} antialiased`}
      >
     {children}
      </body>
    </html>
  );
}
