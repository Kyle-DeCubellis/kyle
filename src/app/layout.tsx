import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kyle DeCubellis — Product, Strategy & Digital",
  description:
    "Product leader and builder helping businesses and individuals create a powerful online presence — from elegant websites to AI-powered workflows.",
  keywords: [
    "product strategy",
    "website design",
    "small business websites",
    "AI tools",
    "Kyle DeCubellis",
    "Boston",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-ivory text-charcoal">
        {children}
      </body>
    </html>
  );
}
