import styled from "styled-components";

export const LogoContainer = styled.figure`
  gap: 14px;
  display: flex;
  align-items: center;
  
`;

export const LogoImage = styled.img`
  width: 36px;
  height: 36px;
`;

export const LogoTypography = styled.figcaption`
  color: ${({ theme }) => theme.colors.typography.main };
  font-size: ${({ theme }) => theme.typography.size.h4 };
  font-family: ${({ theme }) => theme.typography.type.logo};

  > span {
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.secondary.main} 0%,
      ${({ theme }) => theme.colors.primary.main} 100%
    );
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;