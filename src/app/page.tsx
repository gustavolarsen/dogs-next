import photosGet from '@/actions/photosGet';

import FeedFotos from '@/components/feed/feedFotos';

export default async function Home() {
  const { data } = await photosGet();
  return (
    <section className="container mainContainer">
      <FeedFotos photos={data || []} />
    </section>
  );
}
