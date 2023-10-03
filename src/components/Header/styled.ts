import styled from 'styled-components';

export const HeaderContainer = styled('header')`
  width: 100%;
  border: 0 solid rgba(0, 0, 0, 0.08);
  border-bottom-width: 2px;

  h1 {
    color: #000;
  }
`;
export const HeaderWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 576px) {
    padding: 2rem;
  }

  nav {
    display: flex;
    gap: 2.2rem;

    a {
      color: #000;
    }
  }
`;
