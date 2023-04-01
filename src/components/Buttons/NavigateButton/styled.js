import styled from "styled-components";

export const NavigateButtonWrapper = styled.button`
  z-index: 20;
  width: 98px;
  height: 98px;
  display: flex;
  padding: 12px;
  margin: auto 0;
  cursor: pointer;
  position: absolute;
  align-self: center;
  border-radius: 100%;
  align-items: center;
  background: transparent;
  transition: all .3s ease-in-out;
  border: 1px solid ${({ theme }) => theme.colors.typography.main }66;

  &.previous {
    left: -49px;
    justify-content: flex-end;

    &:not(:disabled):hover {
      left: -60px;
    }
  }

  &.next {
    right: -49px;
    justify-content: flex-start;

    &:not(:disabled):hover {
      right: -60px;
    }
  }

  &:after {
    content: '';
    width: 48px;
    height: 48px;
    display: block;
    position: absolute;
    align-self: center;
    border-radius: 100%;
    left: calc((100% - 48px) / 2);
    box-shadow: inset 4px 0px 8px 4px ${({ theme }) => theme.colors.typography.main }40;
  }

  &:not(:disabled):hover {
    width: 120px;
    height: 120px;
    padding: 24px;
    border: 2px solid ${({ theme }) => theme.colors.typography.main }80;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    pointer-events: none;
  }
`;