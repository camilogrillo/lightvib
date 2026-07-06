import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "LightVib — Red light therapy. Intimate wellness. One device.",
  description:
    "LightVib combines red light and near-infrared therapy in an intimate wellness device designed for women seeking vaginal rejuvenation, postpartum recovery, and cancer-related healing.",
  openGraph: {
    title: "LightVib — Red light therapy. Intimate wellness. One device.",
    description:
      "The first intimate wellness device powered by red light and near-infrared therapy. Designed for women who deserve to feel like themselves again.",
    type: "website",
    url: "https://lightvib.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
