import photosGet from '@/actions/photosGet';

import Feed from '@/components/feed';

export default async function Home() {
  const { data } = await photosGet();
  return (
    <section className="container mainContainer">
      <Feed photos={data || []} />
    </section>
  );
}
