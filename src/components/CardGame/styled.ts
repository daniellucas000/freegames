import styled from 'styled-components';

interface GameTitleProps {
  readonly type: string;
}
interface InfoGameProps {
  readonly type: string;
}

interface PlataformContainerProps {
  readonly type: string;
}
interface IconsContainerProps {
  readonly type?: string;
}

export const LargeCardContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  background: #eeecfa;
  padding: 1.25rem;
  margin-bottom: 2.5rem;
  border-radius: 0.25rem;
  color: #000;

  @media (max-width: 576px) {
    margin: 1rem;
    padding: 1rem;
  }

  > div {
    display: flex;
  }
`;

export const InfoGame = styled('div')<InfoGameProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: ${(props) =>
    props.type === 'small' ? '100%' : props.type === 'large' ? '70%' : null};

  @media (max-width: 576px) {
    gap: 1rem;
  }

  p {
    font-size: 1rem;
    line-height: 24px;

    @media (max-width: 576px) {
      max-width: 180px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 0.9rem;
    }
  }
`;
export const GameTitle = styled('span')<GameTitleProps>`
  font-size: ${(props) =>
    props.type === 'small'
      ? '1rem'
      : props.type === 'great'
      ? '1.875rem'
      : null};
  font-weight: 900;
  line-height: 36px;

  @media (max-width: 576px) {
    display: block;
    max-width: ${(props) =>
      props.type === 'small'
        ? '300px'
        : props.type === 'great'
        ? '170px'
        : null};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 1.5rem;
    text-align: ${(props) => (props.type === 'small' ? 'center' : null)};
  }
`;

export const GenreGame = styled('span')`
  width: 7rem;
  background: #d7ff38;
  padding: 0.25em 0.4em;
  text-align: center;
  vertical-align: baseline;
  border-radius: 0.25rem;
  white-space: nowrap;
  /* margin-bottom: 1.5rem; */
  font-size: 80%;
`;

export const PlataformContainer = styled('div')<PlataformContainerProps>`
  display: flex;
  align-items: ${(props) =>
    props.type === 'small'
      ? 'center;'
      : props.type === 'large'
      ? 'flex-start'
      : null};
  gap: 1rem;
  margin: ${(props) =>
    props.type === 'small'
      ? '2rem 1rem 1rem auto;'
      : props.type === 'large'
      ? '1.875rem'
      : null};

  @media (max-width: 576px) {
    margin: ${(props) =>
      props.type === 'small'
        ? '2rem 1rem 1rem auto;'
        : props.type === 'large'
        ? '0.5rem 0'
        : null};
  }

  span svg {
    color: #00adef;
  }
`;

export const IconsContainer = styled('div')<IconsContainerProps>`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 576px) {
    flex-direction: ${(props) => (props.type === 'large' ? 'column' : null)};
    gap: ${(props) => (props.type === 'large' ? '0.8rem' : null)};
  }
`;
