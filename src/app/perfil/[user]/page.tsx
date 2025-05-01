import photosGet from '@/actions/photosGet';
import Feed from '@/components/feed';

export default async function PerfilUserPage({
  params,
}: {
  params: Promise<{ user: string }>;
}) {
  const { user } = await params;
  const { data } = await photosGet({ user });

  if (!data) return null;
  return (
    <section className="container mainSection">
      <h1 className="title">{user}</h1>
      <Feed photos={data} user={user} />
    </section>
  );
}
