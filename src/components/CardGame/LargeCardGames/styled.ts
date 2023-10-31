import styled from 'styled-components';

export const ImgContainer = styled('div')`
  width: 17.25rem;
  height: 10.5rem;
  margin-right: 2.188rem;

  @media (max-width: 576px) {
    max-width: 130px;
    height: 100%;
    margin-right: 1rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    border-radius: 0.25rem; 
  }
`;
