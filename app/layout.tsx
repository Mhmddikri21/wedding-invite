import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sarah & Michael - Wedding Invitation",
  description: "Undangan Pernikahan Sarah Amanda Putri & Michael Budi Santoso | 15 Agustus 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
