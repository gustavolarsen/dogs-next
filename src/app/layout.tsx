import type { Metadata } from 'next';
import { type_second } from '@/utils/fonts';
import './globals.css';
import Header from '@/components/header';

export const metadata: Metadata = {
  title: 'Dogs Next',
  description: 'Rede social para cães',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={type_second.variable}>
        <Header />
        {children}
      </body>
    </html>
  );
}
