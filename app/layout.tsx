import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://mimrandev.vercel.app"
  ),
  title: {
    default: "Muhammad Imran | AI Engineer & Enterprise Architect",
    template: "%s | Muhammad Imran",
  },
  applicationName: "Muhammad Imran Portfolio",
  description:
    "Realizing visions from MERN Stack Developer to AI Engineer. Muhammad Imran builds intelligent, production-ready systems that scale across product, cloud, and automation.",
  authors: [{ name: "Muhammad Imran" }],
  creator: "Muhammad Imran",
  keywords: [
    "Muhammad Imran",
    "AI Engineer",
    "Enterprise Architect",
    "MERN Stack Developer",
    "RAG Systems",
    "Next.js",
    "NestJS",
    "n8n Agents",
    "AWS DevOps",
  ],
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/muhammad-imran-profile.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/muhammad-imran-profile.png", sizes: "512x512", type: "image/png" }],
  },
  openGraph: {
    title: "Muhammad Imran | AI Engineer & Enterprise Architect",
    description:
      "Realizing visions from MERN Stack Developer to AI Engineer. I build intelligent, production-ready systems that scale across product, cloud, and automation.",
    type: "website",
    siteName: "Muhammad Imran Portfolio",
    images: [
      {
        url: "/muhammad-imran-og.png",
        width: 1024,
        height: 1024,
        alt: "Muhammad Imran portrait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Imran | AI Engineer & Enterprise Architect",
    description:
      "AI Engineer and Enterprise Architect building production-ready systems across product, cloud, and automation.",
    images: ["/muhammad-imran-og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
