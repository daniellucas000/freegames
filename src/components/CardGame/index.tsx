import { SmallCardGames } from './SmallCardGames';
import { LargeCardGames } from './LargeCardGames';

interface CardGameProps {
  type: string;
  id: number;
  title: string;
  genre: string;
  developer: string;
  thumbnail: string;
  short_description: string;
  platform: string;
}

export function CardGame(props: CardGameProps) {
  if (props.type === 'small') return <SmallCardGames {...props} />;
  if (props.type === 'large') return <LargeCardGames {...props} />;
  return null;
}
