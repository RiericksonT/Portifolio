import FooterM from "@/components/infoBar/infoBar";
import Menu from "@/components/menu/menu";
import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import "src/styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rierickson Portifolio",
  description: "Meu portifolio descontraido e divertido",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
