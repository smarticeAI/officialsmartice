/* Root layout for SmartICE website */
/* v1.0.0 - Dark theme with Chinese font support */

import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SmartICE - AI 赋能餐饮，让运营更智能",
  description:
    "SmartICE 为中小餐饮企业提供定制化 AI SaaS 解决方案，11 个智能系统覆盖运营、采集、数据、营销全链路。",
  keywords: [
    "餐饮管理",
    "AI SaaS",
    "智能餐饮",
    "库存管理",
    "门店管理",
    "数据分析",
    "SmartICE",
  ],
  authors: [{ name: "SmartICE" }],
  openGraph: {
    title: "SmartICE - AI 赋能餐饮，让运营更智能",
    description:
      "为中小餐饮企业提供定制化 AI SaaS 解决方案，11 个智能系统覆盖运营全链路",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
