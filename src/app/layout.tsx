import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "가맹거래사 전문 컨설팅 - 안전한 가맹사업 시작",
  description: "공정거래위원회 등록 가맹거래사 심상민이 제공하는 전문 가맹사업 컨설팅 서비스. 정보공개서 등록부터 가맹계약서 작성까지 원스톱 지원.",
  keywords: "가맹거래사, 가맹사업, 프랜차이즈, 정보공개서, 가맹계약서, 심상민",
  openGraph: {
    title: "가맹거래사 전문 컨설팅",
    description: "공정거래위원회 등록 전문가가 제공하는 안전한 가맹사업 컨설팅",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
