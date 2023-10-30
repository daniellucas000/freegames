import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Bai Jamjuree', sans-serif;
    overflow-x: hidden;
    padding-bottom: 5rem;
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
}

img {
    display: block;
}
`;
