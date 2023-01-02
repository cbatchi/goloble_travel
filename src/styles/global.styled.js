import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.font.family[0]};
    color: ${({ theme }) => theme.color.blackishGreen};
    font-size: 1rem;
  }

  a {
    text-decoration: none;
    color: inherit;
    font-family: 'TradeGothic LT Extended', sans-serif;
  }

  ul {
    list-style: none;
    padding: 0;
  }


`;
