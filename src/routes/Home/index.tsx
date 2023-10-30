import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useFetch } from '../../hooks/useFetch';
import { CardGame } from '../../components/CardGame';
import { HeroContainer, Recommendations } from './styled';

import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

import '../../styles/pagination.css';

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
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setCurrentPage(0); // Reset the current page when data changes
  }, [data]);

  if (loading) return <div>Psiu</div>;

  if (!data) return null;

  const offset = currentPage * itemsPerPage;
  const currentData = data.slice(offset, offset + itemsPerPage);

  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

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
          {currentData.map((item) => (
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
      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={4}
        marginPagesDisplayed={2}
        previousLabel={<GrFormPrevious />}
        nextLabel={<GrFormNext />}
        breakLabel={'...'}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </main>
  );
}
