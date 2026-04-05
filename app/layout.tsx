import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/sections/Navbar";
import Footer from "./components/sections/Footer";

export const metadata: Metadata = {
  title: "Aura & Acre — Toronto Real Estate",
  description: "Find your place in Toronto. Trusted local agents, real neighbourhoods, homes that fit your life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
