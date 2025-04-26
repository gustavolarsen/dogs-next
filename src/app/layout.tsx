import type { Metadata } from 'next';
import { type_second } from '@/utils/fonts';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { UserContextProvider } from '@/context/userContext';
import userGet from '@/actions/userGet';

export const metadata: Metadata = {
  title: 'Dogs Next',
  description: 'Rede social para cães',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data } = await userGet();

  return (
    <html lang="pt-BR">
      <body className={type_second.variable}>
        <UserContextProvider user={data}>
          <div className="App">
            <Header />
            <main className="AppBody">{children}</main>
            <Footer />
          </div>
        </UserContextProvider>
      </body>
    </html>
  );
}
