import photoGet from '@/actions/photoGet';
import PhotoContent from '@/components/photo/photoContent';
import { notFound } from 'next/navigation';

type FotoIdParams = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({ params }: FotoIdParams) {
  const { id } = await params;
  const { data } = await photoGet(id);

  if (!data) return { titlte: 'Fotos' };
  return {
    title: data.photo.title,
  };
}

export default async function FotoIdPage({ params }: FotoIdParams) {
  const { id } = await params;
  const { data } = await photoGet(id);

  if (!data) return notFound();
  return (
    <section className="container mainContainer">
      <PhotoContent data={data} single={true} />
    </section>
  );
}
