import { GameTitle, GenreGame, InfoGame, PlataformContainer } from '../styled';
import {
  SmallCardContainer,
  ImgContainer,
  IconsContainer,
  GameDescription,
} from './styled';
import { BsWindows } from 'react-icons/bs';
import { PiBrowsersThin } from 'react-icons/pi';

import { Link } from 'react-router-dom';

export function SmallCardGames({ ...props }) {
  return (
    <Link to={`/browser/${props.id}`}>
      <SmallCardContainer>
        <ImgContainer>
          <img src={props.thumbnail} alt="" />
        </ImgContainer>

        <InfoGame type='small'>
          <GameDescription>
            <GameTitle type="small">{props.title}</GameTitle>
            <p>{props.short_description}</p>
          </GameDescription>

          <PlataformContainer type="small">
            <GenreGame>{props.genre}</GenreGame>
            <span>
              {props.platform === 'PC (Windows)' ? (
                <BsWindows size={20} />
              ) : null}
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
        </InfoGame>
      </SmallCardContainer>
    </Link>
  );
}
