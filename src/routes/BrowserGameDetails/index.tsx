import { useFetch } from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import {
  AboutTitleGame,
  GameTitle,
  InfoCol,
  InfoGameContainer,
  InformationGrid,
  MinimumRequirementsContainer,
  RequirementsBrowserTitle,
  Row,
  ScreenshotsContainer,
} from './styled';
import { BrowserRequirements } from './components/BrowserRequirements';
import { WindowsRequirements } from './components/WindowsRequirements';

import styles from './collapse.module.css';

import * as Dialog from '@radix-ui/react-dialog';
import { ImgModal } from './components/ImgModal';

interface MinimumRequirementsProps {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
}

interface ScreenshotsProps {
  id: number;
  image: string;
}

interface BrowserGames {
  title: string;
  thumbnail: string;
  status: string;
  description: string;
  developer: string;
  genre: string;
  platform: string;
  publisher: string;
  release_date: string;
  minimum_system_requirements: MinimumRequirementsProps;
  screenshots: ScreenshotsProps[];
}

export function BrowserGameDetail() {
  const { id } = useParams();
  const { data, loading } = useFetch<BrowserGames>(
    `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
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

  const firstparagraph = data.description.substring(0, 400);
  const lastparagraph = data.description.substring(400);

  return (
    <main>
      <Row>
        <div>
          <img src={data.thumbnail} alt="" />
        </div>
        <InfoGameContainer>
          <GameTitle>{data.title}</GameTitle>
          <AboutTitleGame>About {data.title}</AboutTitleGame>
          <div>
            <input
              className={styles['read-more-state']}
              type="checkbox"
              hidden
              id="read-more"
            />
            <div className={styles['read-more-wrap']}>
              <p>{firstparagraph}</p>
              <p className={styles['read-more-target']}>{lastparagraph}</p>
            </div>
            <label
              className={styles['read-more-trigger_closed']}
              htmlFor="read-more"
            >
              +<span>Read More</span>
            </label>
            <label
              className={styles['read-more-trigger_opened']}
              htmlFor="read-more"
            >
              -<span>Read Less</span>
            </label>
          </div>
          <h2>Additional Information</h2>

          <InformationGrid>
            <InfoCol>
              <span>Title</span>
              <p>{data.title}</p>
            </InfoCol>
            <InfoCol>
              <span>Developer</span>
              <p>{data.developer}</p>
            </InfoCol>
            <InfoCol>
              <span>Publisher</span>
              <p>{data.publisher}</p>
            </InfoCol>
            <InfoCol>
              <span>Release Date</span>
              <p>{data.release_date}</p>
            </InfoCol>
            <InfoCol>
              <span>Genre</span>
              <p>{data.genre}</p>
            </InfoCol>
            <InfoCol>
              <span>Platform</span>
              <p>{data.platform}</p>
            </InfoCol>
          </InformationGrid>

          <h2>{data.title} Screenshots</h2>
          <ScreenshotsContainer>
            {data.screenshots.map((i) => (
              <Dialog.Root key={i.id}>
                <Dialog.Trigger asChild>
                  <img src={i.image} alt="" />
                </Dialog.Trigger>

                <ImgModal img={i.image} />
              </Dialog.Root>
            ))}
          </ScreenshotsContainer>

          <h2>
            Minimum System Requirements <span>({data.platform})</span>
          </h2>
          {data.platform.includes('Windows, Web Browser') ? (
            <MinimumRequirementsContainer>
              <InfoCol>
                <span>OS</span>
                <p>{data.minimum_system_requirements.os}</p>
              </InfoCol>
              <InfoCol>
                <span>Processor</span>
                <p>{data.minimum_system_requirements.processor}</p>
              </InfoCol>
              <InfoCol>
                <span>Memory</span>
                <p>{data.minimum_system_requirements.memory}</p>
              </InfoCol>
              <InfoCol>
                <span>Graphics</span>
                <p>{data.minimum_system_requirements.graphics}</p>
              </InfoCol>
              <InfoCol>
                <span>Storage</span>
                <p>{data.minimum_system_requirements.storage}</p>
              </InfoCol>
              <InfoCol>
                <span>Additional Notes</span>
                <p>Specifications may change during development</p>
              </InfoCol>

              <RequirementsBrowserTitle>
                Minimum System Requirements{' '}
                <span>({data.platform.slice(-7)})</span>
              </RequirementsBrowserTitle>
              <BrowserRequirements />
            </MinimumRequirementsContainer>
          ) : data.platform.includes('Windows') ? (
            <WindowsRequirements data={data} />
          ) : (
            <BrowserRequirements title={data.title} />
          )}
        </InfoGameContainer>
      </Row>
    </main>
  );
}
