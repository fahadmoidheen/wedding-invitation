import type { Metadata } from "next";
import { Inter, Manjari } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manjari = Manjari({
  variable: "--font-manjari",
  weight: ["100", "400", "700"],
  subsets: ["malayalam", "latin"],
});

export const metadata: Metadata = {
  title: "Kerala Wedding Invitation",
  description: "A luxury cinematic 3D Kerala wedding invitation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manjari.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-deep-black text-ivory">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
