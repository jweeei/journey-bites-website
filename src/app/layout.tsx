import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { Noto_Sans as NotoSans } from 'next/font/google';
import './globals.css';

const inter = NotoSans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Journey bites | 美食部落',
  description: '跟著『Journey Bites』一起展開美食與旅行之旅，我們分享精彩的美食體驗和令人難忘的目的地。一同探索、品味，盡情享受每段旅程。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster /> 
        <main>{children}</main>
      </body>
    </html>
  );
}
