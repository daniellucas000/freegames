import styled from 'styled-components';

export const BrowserGamesContainer = styled('section')`
  margin-top: 1.5rem;

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1.1rem;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 576px) {
      grid-template-columns: 1fr 1fr;
      margin: 1rem;
      grid-gap: 0.8rem;
    }
  }
`;
