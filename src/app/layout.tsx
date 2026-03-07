import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kyle DeCubellis - Let's win together",
  description:
    "Product thinker, web builder, and strategic partner for people who want to win. 15 years. 10 patents. Greater Boston.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
