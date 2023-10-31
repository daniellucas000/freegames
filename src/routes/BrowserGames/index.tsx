import { useState } from 'react';
import { CardGame } from '../../components/CardGame';
import { SkeletonBrowserGames } from '../../components/Skeleton/browserGameSkeleton';
import { useFetch } from '../../hooks/useFetch';
import { BrowserGamesContainer } from './styled';
import { Pagination, Stack } from '@mui/material';
import { PaginationContainer } from '../Home/styled';

interface BrowserGames {
  title: string;
  developer: string;
  thumbnail: string;
  short_description: string;
  platform: string;
  genre: string;
  id: number;
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

  const itemsPerPage = 8;
  const [page, setPage] = useState(1);

  if (loading) return <SkeletonBrowserGames />;
  if (!data) return null;


  const handlePageChange = (
    _event: any,
    value: React.SetStateAction<number>
  ) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const gamesToDisplay = data.slice(startIndex, endIndex);

  return (
    <BrowserGamesContainer>
      <div>
        {gamesToDisplay.map((item) => (
          <CardGame
            key={item.id}
            id={item.id}
            title={item.title}
            genre={item.genre}
            developer={item.developer}
            thumbnail={item.thumbnail}
            short_description={item.short_description}
            platform={item.platform}
            type="small"
          />
        ))}
      </div>
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
    </BrowserGamesContainer>
  );
}
