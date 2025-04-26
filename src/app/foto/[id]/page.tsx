type FotoIdPageProps = {
  params: Promise<{ id: string }>;
};

export default async function FotoIdPage({ params }: FotoIdPageProps) {
  const { id } = await params;
  return (
    <main>
      <h1>FotoIdPage {id}</h1>
    </main>
  );
}
