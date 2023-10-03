import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Content, Overlay } from './styled';
import { RiCloseLine } from 'react-icons/ri';

export function ImgModal({ img }: any) {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <img src={img} alt="" />
        <CloseButton>
          <RiCloseLine size={35} />
        </CloseButton>
      </Content>
    </Dialog.Portal>
  );
}
