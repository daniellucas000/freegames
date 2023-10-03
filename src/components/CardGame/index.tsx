import { SmallCardGames } from './SmallCardGames';
import { LargeCardGames } from './LargeCardGames';
import { RecentlyGames } from '../../hooks/useContext';

export function CardGame(props: RecentlyGames) {
  if (props.type === 'small') return <SmallCardGames {...props} />;
  if (props.type === 'large') return <LargeCardGames {...props} />;
  return null;
}
