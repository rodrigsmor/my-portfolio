import styled from "styled-components";

export const CheckBoxContainer = styled.button`
  padding: 2px 8px;
  border-radius: 4px;
  display: flex;
  gap: 6px;
  cursor: pointer;
  align-items: center;
  transition: all .3S ease;
  font-size: ${({ theme }) => theme.typography.size.h6 };
  color: ${({ theme }) => theme.colors.typography.main}99;
  background: ${({ theme }) => theme.colors.typography.main}1A;
  font-weight: ${({ theme }) => theme.typography.weight.regular };
  border: 2px solid ${({ theme }) => theme.colors.typography.main}1A;

  &.checked {
    color: ${({ theme }) => theme.colors.primary.main};
    background: ${({ theme }) => theme.colors.primary.main}1A;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};

    > * {
      fill: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;