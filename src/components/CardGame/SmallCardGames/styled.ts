import styled from 'styled-components';

export const SmallCardContainer = styled('div')`
  margin-bottom: 2.5rem;
  background: #efedf6;
  overflow: hidden;
  border-radius: 0.25rem;
  color: #000;

  > div:nth-child(2) p:nth-child(2) {
    max-width: 262px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 576px) {
      max-width: 300px;
    }
  }
`;

export const GameDescription = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ImgContainer = styled('div')`
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    border-radius: 0.25rem;
  }
`;

