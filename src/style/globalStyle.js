import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.typography.main };
    font-family: ${({ theme }) => theme.typography.type.main };
  }

  html {
    overflow: hidden;
    max-width: 100vw;
    background: ${({ theme }) => theme.colors.background.main };
  }
`;