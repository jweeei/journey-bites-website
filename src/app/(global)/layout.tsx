import type { ReactNode } from 'react';
import Header from '@/components/Header';

export default function GlobalLayout ({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Header />
      {children} 
    </>
  );
}