import getFotos from '@/actions/photosGet';
import FeedFotos from '@/components/feed/feedFotos';

export default async function Home() {
  const data = await getFotos();
  return (
    <section className="container mainContainer">
      <FeedFotos fotos={data} />
    </section>
  );
}
