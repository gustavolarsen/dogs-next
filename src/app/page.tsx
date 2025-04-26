import getFotos from '@/actions/getFotos';
import FeedFotos from '@/components/feed/feedFotos';

export default async function Home() {
  const data = await getFotos();
  return (
    <section className="container mainContainer">
      <FeedFotos fotos={data} />
    </section>
  );
}
