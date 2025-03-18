import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import YandexMetrika from "@/components/YandexMetrika";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Краска-масло для дерева Biofa | Немецкие масла для дерева",
  description: "Немецкие масла для дерева Biofa. Создано для российского сурового климата и проверено на практике более 10 лет.",
  keywords: "масло для дерева, масло для дерева Biofa, масло для террас, масло для деревянной мебели, масло для деревянных полов, масло для дерева для наружных работ, масло для дерева для внутренних работ, тиковое масло для дерева, масло для дерева с твердым воском, масло для дерева на водной основе, защита дерева, пропитка для дерева, краска для дерева, лазурь для дерева, воск для дерева, покраска деревянного дома, покраска сруба, покраска бруса, защита древесины, пропитка для древесины, краска для древесины, Biofa масло для дерева, Biofa краска для дерева, Biofa пропитка для дерева, Biofa воск для дерева, масло для дерева купить, краска для дерева купить, пропитка для дерева купить, воск для дерева купить"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <YandexMetrika/>
        {children}
      </body>
    </html>
  );
}
