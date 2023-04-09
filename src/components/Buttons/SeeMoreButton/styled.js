import styled, { keyframes } from "styled-components";

const MouseScrollAnimation = keyframes`
  from {
    top: 7px;
    width: 6px;
    opacity: 1;
    height: 6px;
  } to {
    top: 28px;
    width: 2px;
    height: 2px;
    opacity: 0;
  }
`;

const MouseContainerAnimation = keyframes`
  from {
    gap: 4px;
  } to {
    gap: 12px;
  }
`;

const MouseDrawAnimation = keyframes`
  from {
    height: 38px;
    max-height: 38px;
  } to {
    height: 0px;
    max-height: 0px;
  }
`;

export const SeeMoreButtonContainer = styled.button`
  height: 76px;
  gap: 10px;
  z-index: 51;
  bottom: 38px;
  display: flex;
  cursor: pointer;
  width: max-content;
  position: absolute !important;
  align-items: center;
  background: transparent;
  flex-direction: column;
  justify-content: flex-start;
  border: 0px solid transparent;
  animation: ${MouseContainerAnimation} 1.2s ease infinite alternate;
  
  &.hide {
    opacity: 0;
    pointer-events: none;
  }
  
  &:not(.hide) {
    transition-delay: .8s;
  }
  
  > .mouse-draw {
    width: 29px;
    height: 38px;
    min-height: 38px;
    display: flex;
    position: relative;
    border-radius: 14px;
    align-items: flex-end;
    justify-content: center;
    border: 2px solid ${({ theme }) => theme.colors.typography.main}1A;

    &:after {
      top: 7px;
      opacity: 1;
      width: 6px;
      content: '';
      height: 6px;
      margin: 0 auto;
      position: absolute;
      border-radius: 100%;
      background: ${({ theme }) => theme.colors.typography.main };
      animation: ${MouseScrollAnimation} 1.2s ease-in-out infinite alternate;
    }
    
    > span {
      width: 29px;
      height: 38px;
      margin: auto;
      bottom: -1px;
      display: flex;
      overflow: hidden;
      position: absolute;
      align-items: flex-end;
      justify-content: flex-end;
      animation: ${MouseDrawAnimation} 1.2s ease-out infinite alternate;

      &:before {
        content: '';
        width: 29px;
        height: 38px;
        display: block;
        position: absolute;
        border-radius: 14px;
        box-sizing: border-box;
        border: 2px solid ${({ theme }) => theme.colors.typography.main};
      }
    }
  }

  @media ${({ theme }) => theme.media.desktop } {
    bottom: 24px;
  }
`;