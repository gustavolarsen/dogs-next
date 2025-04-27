import ContaPhotoPost from '@/components/conta/contaPhotoPost';
import { Metadata } from 'next';

export const runtime = 'edge';

export const metadata: Metadata = {
  title: 'Postar | Minha Conta',
};

export default async function PostarPage() {
  return <ContaPhotoPost />;
}
