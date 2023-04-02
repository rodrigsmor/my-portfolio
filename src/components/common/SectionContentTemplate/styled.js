import styled from "styled-components";

export const SectionContentTemplateWrapper = styled.div`
  z-index: 20;
  width: 100vw;
  height: 100vh;
  bottom: -150%;
  max-width: 100vw;
  overflow: hidden;
  background: transparent;
  transition: all .3s ease-out;
  position: absolute !important;
  
  &.opened {
    bottom: 0;
  }
  
  > div.content-wrapper {
    width: 100%;
    max-height: 100vh;
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
  left: 40px;
  display: flex;
  cursor: pointer;
  position: absolute !important;
  align-items: center;
  background: transparent;
  border: 0px solid transparent;
  font-size: ${({ theme }) => theme.typography.size.h5 };
  color: ${({ theme }) => theme.colors.typography.main };
  font-weight: ${({ theme }) => theme.typography.weight.medium };
`;