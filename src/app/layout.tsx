import FooterM from "@/components/infoBar/infoBar";
import Menu from "@/components/menu/menu";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "src/styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Test React",
  description: "Test React",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
