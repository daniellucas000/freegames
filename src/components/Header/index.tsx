import { useState } from 'react';

import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { HeaderContainer, HeaderWrapper } from './styled';
import { MenuMobile } from '../MenuMobile';

export function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  
  return (
    <>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <HeaderContainer>
        <HeaderWrapper>
          <Link to="/">
            <h1>Free games</h1>
          </Link>

          <nav>
            <Link to="/">Free Games</Link>
            <Link to="/browser">Browser Games</Link>
          </nav>
          <HiOutlineMenuAlt3 onClick={() => setMenuIsVisible(true)} size={35} />
        </HeaderWrapper>
      </HeaderContainer>
    </>
  );
}
