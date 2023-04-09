import styled, { keyframes } from "styled-components";

const ModalOpeningAnimation = keyframes`
  0% {
    height: 0px;
  }
  10% {
    height: 100dvh;
  }
  100% {
    height: 0px;
  }
`;

const ModalClosingAnimation = keyframes`
  0% {
    height: 0px;
  }
  80% {
    height: 100dvh;
  }
  100% {
    height: 0px;
  }
`;


export const SectionContentTemplateWrapper = styled.div`
  z-index: 20;
  width: 100vw;
  height: 100dvh;
  bottom: -200vh;
  max-width: 100vw;
  overflow: hidden;
  background: transparent;
  transition: all .3s ease-out;
  position: absolute !important;
  
  &.opened {
    bottom: 0;

    > div.content-wrapper {
      &:before {
        animation: ${ModalOpeningAnimation} .9s cubic-bezier(0.76, 0, 0.24, 1) !important;
      }
    }
  }

  &:not(.opened) {
    transition-delay: .6s;

    &:before {
      content: '';
      width: 100dvw;
      height: 0dvh;
      display: block;
      flex: 1;
      background: ${({ theme }) => theme.colors.background.main};
      animation: ${ModalClosingAnimation} .9s cubic-bezier(0.76, 0, 0.24, 1);
    }
  }
  
  > div.content-wrapper {
    &:before{
      top: 0;
      content: '';
      width: 100dvw;
      height: 0dvh;
      display: block;
      flex: 1;
      poisition: absolute;

      background: ${({ theme }) => theme.colors.background.main};
    }
    
    width: 100%;
    max-height: 100dvh;
    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-width: none;
    -ms-overflow-style: none;
    scroll-snap-type: y proximity;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const BackButton = styled.button`
  gap: 10px;
  top: 80px;
  left: 16px;
  display: flex;
  cursor: pointer;
  position: absolute !important;
  align-items: center;
  background: transparent;
  border: 0px solid transparent;
  font-size: ${({ theme }) => theme.typography.size.h5 };
  color: ${({ theme }) => theme.colors.typography.main };
  font-weight: ${({ theme }) => theme.typography.weight.medium };

  @media ${({ theme }) => theme.media.desktop } {
    left: 40px;
  }
`;