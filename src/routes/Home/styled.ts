import styled from 'styled-components';

export const HeroContainer = styled('section')`
  width: 100%;
  @media (max-width: 576px) {
    height: 12rem;
  }

  > div {
    overflow: hidden;
    white-space: nowrap;
    position: relative;

    h2 {
      font-size: 17.6rem;
      color: #efedf6;

      position: relative;
      display: inline-block;
      animation: move 20s infinite linear;

      @media (max-width: 576px) {
        font-size: 14.08rem;
        animation: move 16s infinite linear;
        font-size: 6.08rem;
      }

      @keyframes move {
        0% {
          transform: translateX(-500px);
        }
        50% {
          transform: translateX(300px);
        }
        100% {
          transform: translateX(-500px);
        }
      }
    }
  }
  h3 {
    font-size: 3.75rem;
    font-weight: 900;
    line-height: 60px;
    position: absolute;
    top: 50%;
    left: 18%;

    @media (max-width: 576px) {
      font-size: 1.2rem;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -16%);
    }

    span {
      line-height: 60px;
      display: inline-block;
      background: #9440ff;
      color: #fff;

      @media (max-width: 576px) {
        line-height: 1.6rem;
      }
    }
  }
`;

export const Recommendations = styled('section')`
  > div {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
  }
`;


export const PaginationContainer = styled('div')`
 display: flex;
 justify-content: center;
`;
