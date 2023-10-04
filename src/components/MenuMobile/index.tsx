// import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styled';

import { IoClose } from 'react-icons/io5';
import { useEffect } from 'react';

interface MenuMobileProps {
  menuIsVisible: boolean;
  setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
export function MenuMobile({
  menuIsVisible,
  setMenuIsVisible,
}: MenuMobileProps) {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible]);

  return (
    <Container isVisible={menuIsVisible}>
      <IoClose size={45} onClick={() => setMenuIsVisible(false)} />
      <nav>
        <Link to="/">Free Games</Link>
        <Link to="/browser">Browser Games</Link>
      </nav>
    </Container>
  );
}
