import * as Dialog from '@radix-ui/react-dialog';
import { Content, Overlay } from './styled';

export function ImgModal({ img }: any) {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <img src={img} alt="" />
      </Content>
    </Dialog.Portal>
  );
}
