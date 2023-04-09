import styled, { css } from "styled-components";

const buttonStyle = css`
  height: 44px;
  display: flex;
  padding: 0 24px;
  width: fit-content;
  align-items: center;
  border-radius: 16px;
  text-decoration: none;
  justify-content: center;
  border: 0px solid transparent;
  cursor: pointer;
  transition: all .5s ease;
  color: ${({ theme }) => theme.colors.typography.main };
  font-size: ${({ theme }) => theme.typography.size.h5 };
  font-weight: ${({ theme }) => theme.typography.weight.medium };

  &.transparent {
    background: transparent;

    &:hover {
      background: ${({ theme }) => theme.colors.surface.dark }66;
    }
  }

  &.gradient {
    background-image: linear-gradient(90.31deg, ${({ theme }) => theme.colors.secondary.main} 0%, ${({ theme }) => theme.colors.primary.main } 104.35%);

    &:hover {
      filter: brightness(80%);
    }
  }
`

export const LinkWrapper = styled.a` ${buttonStyle}`;
export const ButtonWrapper = styled.button` ${buttonStyle} `;