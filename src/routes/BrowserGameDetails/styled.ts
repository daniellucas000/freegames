import styled from 'styled-components';

export const Row = styled('div')`
  display: grid;
  grid-template-columns: 376px 1fr;
  grid-gap: 1rem;
  max-width: 1200px;
  width: 100%;
  margin: 1.5rem auto 5rem;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }

  > div:nth-child(2) {
    padding: 1rem;
  }

  > div:nth-child(1) img {
    border-radius: 0.25rem;

    @media (max-width: 576px) {
      max-width: 538px;
      width: 100%;
    }
  }
`;

export const InfoGameContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const InformationGrid = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;

  @media (max-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const InfoCol = styled('div')`
  span {
    font-size: 0.9375rem;
    font-weight: 600;
    line-height: 1.5;
    color: #000;
  }

  p {
    font-size: 0.9375rem;
    font-weight: 400;
    line-height: 1.5;
    color: #000;
  }
`;

export const GameTitle = styled('h1')`
  /* margin-bottom: 3rem; */
`;

export const AboutTitleGame = styled('h2')`
  /* margin-bottom: 1.5rem; */
`;

export const ScreenshotsContainer = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;

  @media (max-width: 576px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.8rem;
  }

  img {
    border-radius: 0.25rem;
    height: 146px;
    cursor: pointer;

    @media (max-width: 576px) {
      width: 100%;
      height: 120px;
    }
  }
`;

export const MinimumRequirementsContainer = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  grid-gap: 1rem;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }

  div:nth-child(8) {
    grid-column: 1;
  }
`;
export const RequirementsBrowserTitle = styled('h2')`
  margin: 2rem 0;
  grid-column: 1/3;
`;
