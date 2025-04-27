import { Foto } from '@/actions/photosGet';
import Image from 'next/image';
import Link from 'next/link';
import styles from './feed.module.css';

export default function FeedFotos({ fotos }: { fotos: Foto[] }) {
  return (
    <ul className={`${styles.feed} animeLeft`}>
      {fotos &&
        fotos.map((foto) => (
          <li key={foto.id} className={styles.photo}>
            <Link href={`/foto/${foto.id}`} scroll={false}>
              <Image
                src={foto.src}
                width={1500}
                height={1500}
                alt={foto.title}
                sizes="80vw"
              />
              <span className={styles.visualizacao}>{foto.acessos}</span>
            </Link>
          </li>
        ))}
    </ul>
  );
}
