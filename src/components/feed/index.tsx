import { Photo } from '@/actions/photosGet';
import FeedPhotos from './feedFotos';

export default function Feed({ photos }: { photos: Photo[] }) {
  return (
    <div>
      <FeedPhotos photos={photos} />
    </div>
  );
}
