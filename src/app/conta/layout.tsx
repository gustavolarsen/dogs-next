import ContaHeader from '@/components/conta/contaHeader';
import React from 'react';
export default function ContaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container">
      <ContaHeader />
      {children}
    </div>
  );
}
