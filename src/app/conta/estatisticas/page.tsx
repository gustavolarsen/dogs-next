'use client';

import React from 'react';
import statsGet, { StatsData } from '@/actions/statsGet';
import dynamic from 'next/dynamic';

const ContaEstatisticas = dynamic(
  () => import('@/components/conta/contaEstatisticas'),
  {
    loading: () => <p>Carregando...</p>,
    ssr: false,
  },
);

export default function EstatisticasPage() {
  const [data, setData] = React.useState<StatsData[] | null>(null);

  React.useEffect(() => {
    async function fetchData() {
      const result = await statsGet();
      if (result.ok) {
        setData(result.data);
      }
    }
    fetchData();
  }, []);

  if (!data) return null;

  return (
    <section>
      <ContaEstatisticas data={data} />
    </section>
  );
}
