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
  title: "LightVib | Red Light Therapy for Vaginal Rejuvenation & Intimate Wellness",
  description:
    "LightVib is the first intimate wellness device combining red light (660nm) and near-infrared (850nm) therapy for vaginal rejuvenation, postpartum recovery, and cancer-related healing. Non-hormonal. Non-invasive. Join the waitlist.",
  keywords: [
    "red light therapy vaginal rejuvenation",
    "vaginal rejuvenation device at home",
    "red light therapy postpartum recovery",
    "near infrared therapy intimate wellness",
    "non-hormonal vaginal rejuvenation",
    "photobiomodulation intimate",
    "red light therapy cancer recovery women",
    "vaginal atrophy treatment",
    "menopause vaginal dryness device",
    "intimate wellness device",
    "LightVib",
  ],
  authors: [{ name: "LightVib" }],
  robots: "index, follow",
  openGraph: {
    title: "LightVib | Red Light Therapy for Vaginal Rejuvenation & Intimate Wellness",
    description:
      "The first intimate wellness device powered by red light and near-infrared therapy. Clinically-inspired. Non-hormonal. Designed for postpartum recovery, vaginal rejuvenation, and cancer-related healing.",
    type: "website",
    url: "https://lightvib.com",
    siteName: "LightVib",
    images: [
      {
        url: "https://lightvib.com/product-closeup.png",
        width: 569,
        height: 677,
        alt: "LightVib — red light therapy intimate wellness device",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LightVib | Red Light Therapy for Vaginal Rejuvenation",
    description:
      "The first intimate wellness device powered by red light and near-infrared therapy. Non-hormonal. Launching on Kickstarter.",
    images: ["https://lightvib.com/product-closeup.png"],
  },
  alternates: {
    canonical: "https://lightvib.com",
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
