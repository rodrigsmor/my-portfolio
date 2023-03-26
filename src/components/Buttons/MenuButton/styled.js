import styled from "styled-components";

export const ButtonWrapper = styled.button`
  width: 60px;
  height: 60px;
  display: grid;
  cursor: pointer;
  transition: .5s ease;
  place-items: center;
  background: ${({ theme }) => theme.colors.surface.main };
  border: 1px solid ${({ theme }) => theme.colors.typography.main }1A;

  &:hover {
    background: ${({ theme }) => theme.colors.surface.dark };
  }
`;