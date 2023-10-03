import { Link } from 'react-router-dom';
import { HeaderContainer, HeaderWrapper } from './styled';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Link to="/">
          <h1>Logo</h1>
        </Link>

        <nav>
          <Link to="/">Free Games</Link>
          <Link to="/browser">Browser Games</Link>
        </nav>
      </HeaderWrapper>
    </HeaderContainer>
  );
}
