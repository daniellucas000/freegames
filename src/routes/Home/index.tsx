import { useFetch } from '../../hooks/useFetch';
import { CardGame } from '../../components/CardGame';
import { HeroContainer, Recommendations } from './styled';

export interface GamesProps {
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

export function Home() {
  const { data, loading } = useFetch<GamesProps[]>(
    `https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=relevance`,
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
    <main>
      <HeroContainer>
        <div>
          <h2>GAMES+PASSION</h2>

          <h3>
            Discover the best <span>Free</span>-to-play games!
          </h3>
        </div>
      </HeroContainer>

      <Recommendations>
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
              type="large"
            />
          ))}
        </div>
      </Recommendations>
    </main>
  );
}
