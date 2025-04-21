import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dogs Next',
  description: 'Criado por Gustavo Larsen',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
