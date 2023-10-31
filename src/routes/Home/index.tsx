import { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { CardGame } from '../../components/CardGame';
import { HeroContainer, PaginationContainer, Recommendations } from './styled';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { SkeletonScreen } from '../../components/Skeleton';

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

  const itemsPerPage = 10;
  const [page, setPage] = useState(1);

  if (loading) return <SkeletonScreen />;

  if (!data) return null;

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = data.slice(startIndex, endIndex);

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
          {displayedData.map((item) => (
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

      <PaginationContainer>
        <Stack spacing={2} sx={{ justifyContent: 'center', mt: 2 }}>
          <Pagination
            count={Math.ceil(data.length / itemsPerPage)}
            page={page}
            onChange={handlePageChange}
            color="primary"
            shape="rounded"
            sx={{
              '& .Mui-selected': {
                backgroundColor: 'primary.main',
                color: 'white',
              },
            }}
          />
        </Stack>
      </PaginationContainer>
    </main>
  );
}
