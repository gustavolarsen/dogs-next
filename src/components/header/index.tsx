import Link from 'next/link';
import styles from './header.module.css';
import Image from 'next/image';

export default function Header() {
  const user = false;

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} href="/">
          <Image
            src={'/assets/dogs.svg'}
            alt="Dogs"
            width={28}
            height={22}
            priority
          />
        </Link>
        <Link className={styles.login} href={user ? '/conta' : '/login'}>
          {user ? 'Username' : 'Login / Criar'}
        </Link>
      </nav>
    </header>
  );
}
