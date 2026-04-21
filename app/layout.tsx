import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Accredian Enterprise | Next-Gen Expertise For Your Organization",
  description:
    "Partner with Accredian to upskill your workforce with tailored learning programs in AI, Data Science, Product Management, and more. 10,000+ professionals trained.",
  keywords:
    "enterprise training, corporate learning, AI training, data science, upskilling, Accredian",
  openGraph: {
    title: "Accredian Enterprise",
    description: "Next-Gen Expertise For Your Enterprise",
    type: "website",
    url: "https://enterprise.accredian.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
