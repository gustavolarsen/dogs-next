export default async function FotoIdPage({
  params,
}: {
  params: { id: number };
}) {
  return (
    <main>
      <h1>FotoIdPage id: {params.id}</h1>
    </main>
  );
}
