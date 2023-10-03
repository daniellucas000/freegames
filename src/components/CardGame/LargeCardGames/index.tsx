import { IconsContainer } from '../SmallCardGames/styled';
import {
  InfoGame,
  PlataformContainer,
  LargeCardContainer,
  GenreGame,
  GameTitle,
} from '../styled';
import { ImgContainer } from './styled';
import { BsWindows } from 'react-icons/bs';
import { PiBrowsersThin } from 'react-icons/pi';

import { Link } from 'react-router-dom';

export function LargeCardGames({ ...props }) {
  return (
    <Link to={`/${props.id}`}>
      <LargeCardContainer>
        <div>
          <ImgContainer>
            <img src={props.thumbnail} alt="" />
          </ImgContainer>

          <InfoGame type='large'>
            <div>
              <GameTitle type="great">{props.title}</GameTitle>
              <p>{props.short_description}</p>
            </div>
            <GenreGame>{props.genre}</GenreGame>
          </InfoGame>
        </div>
        <PlataformContainer type="large">
          <span>
            {props.platform === 'PC (Windows)' ? <BsWindows size={20} /> : null}
            {props.platform === 'PC (Windows), Web Browser' ? (
              <IconsContainer>
                <BsWindows size={20} />
                <PiBrowsersThin size={26} />
              </IconsContainer>
            ) : null}
            {props.platform === 'Web Browser' ? (
              <PiBrowsersThin size={26} />
            ) : null}
          </span>
        </PlataformContainer>
      </LargeCardContainer>
    </Link>
  );
}
