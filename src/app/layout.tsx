
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";


import {
  Raleway,
  Nunito,
  Poppins,
  Oxanium,
  Geist,
  Geist_Mono,
  Martel_Sans,
} from "next/font/google";
import Footer from "@/components/Footer";
import { CivicAuthProvider } from "@civic/auth/nextjs";


const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

const oxanium = Oxanium({
  variable: "--font-oxanium",
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const martelSans = Martel_Sans({
  variable: "--martel-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"]
})

export const metadata: Metadata = {
  title: "AirSprint",
  description: "Courier App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${raleway.variable}
          ${nunito.variable}
          ${poppins.variable}
          ${oxanium.variable}
          ${martelSans.variable}
          antialiased
        `}
      >
        <CivicAuthProvider>
        <Navbar />
        {children}
        <Footer/>
        </CivicAuthProvider>
      </body>
    </html>
  );
}
