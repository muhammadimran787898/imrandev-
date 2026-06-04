import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Imran | AI Engineer & Enterprise Architect",
  description:
    "Portfolio of Muhammad Imran, a full-stack AI engineer building scalable products, RAG systems, agentic workflows, and cloud-native platforms.",
  authors: [{ name: "Muhammad Imran" }],
  openGraph: {
    title: "Muhammad Imran | AI Engineer & Enterprise Architect",
    description:
      "Full-stack AI engineer specializing in Next.js, NestJS, RAG systems, n8n agents, and AWS deployments.",
    type: "website",
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
