import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  width: 60vw;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 576px) {
    min-width: 22rem;
  }

  img {
    max-width: 100%;
    width: 100%;
    display: block;
    line-height: 0;
    border: 0;
  }
`;