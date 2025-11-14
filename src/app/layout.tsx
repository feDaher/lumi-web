import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  // Carrega os pesos necessários (fino, regular, negrito)
  weight: ["100", "400", "700", "800"], 
});

export const metadata: Metadata = {
  title: "Lumi App",
  description: "App de apoio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}