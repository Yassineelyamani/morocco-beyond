import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Morocco Beyond | Luxury Morocco Tours",
  description: "Luxury private tours in Morocco. Sahara Desert, Marrakech, Fes, Chefchaouen and custom travel experiences.",
  openGraph: {
    title: "Morocco Beyond | Luxury Morocco Tours",
    description: "Luxury private tours in Morocco. Sahara Desert, Marrakech, Fes, Chefchaouen and custom travel experiences.",
  },
  verification: {
    google: "SZmhMir5XVQ6pu3W4eC_Hvl_dyP0NuO689QtuybvmWs",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#060506] text-white">
        {children}
        <GoogleAnalytics gaId="G-XDQDVP4GNY" />
      </body>
    </html>
  );
}
