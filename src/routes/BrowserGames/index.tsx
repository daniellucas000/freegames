import { CardGame } from '../../components/CardGame';
import { useFetch } from '../../hooks/useFetch';
import { BrowserGamesContainer } from './styled';

interface BrowserGames {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
}

export function BrowserGames() {
  const { data, loading } = useFetch<BrowserGames[]>(
    'https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser',
    {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
      },
    }
  );

  if (loading) return <div>Psiu</div>;
  if (!data) return null;

  return (
    <BrowserGamesContainer>
      <div>
        {data.map((item) => (
          <CardGame
            key={item.id}
            id={item.id}
            title={item.title}
            genre={item.genre}
            developer={item.developer}
            thumbnail={item.thumbnail}
            short_description={item.short_description}
            platform={item.platform}
            type='small'
          />
        ))}
      </div>
    </BrowserGamesContainer>
  );
}
