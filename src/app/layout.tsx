import type { Metadata } from "next";
import { Exo_2, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/components/common/ReduxProvider";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

const geistSans = Exo_2({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ketan Solanki | Software Engineer",
  description: "Ketan Solanki - Software Engineer",
  icons: ["/favicon.ico"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <ReduxProvider>{children}</ReduxProvider>
      </body>
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="16f69bab-1528-4626-924c-1a8e58ef5d14"
      />
    </html>
  );
}
