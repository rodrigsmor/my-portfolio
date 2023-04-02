import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100vw;
  height: 100dvh;
  display: flex;
  overflow: hidden;
  max-height: 100dvh;
  position: relative;
  align-items: center;
  justify-content: center;

  > .background-support {
    z-index: 1;
    width: 100vw;
    height: 100dvh;
    position: absolute;

    &:after {
      top: 3.2vh;
      width: 16vw;
      height: 16vw;
      right: 22.7vw;
      border-radius: 100%;
      background: ${({ theme }) => theme.colors.primary.main };
    }

    &:before {
      right: -8%;
      bottom: -8%;
      width: 48.32vw;
      height: 18.5vh;
      border-radius: 100%;
      transform: rotate(-33.56deg);
      background: ${({ theme }) => theme.colors.secondary.main };
    }
  }

  &:after,&:before,
  > .background-support:after, > .background-support:before {
    z-index: 1;
    content: '';
    display: block;
    position: absolute;
  }
  
  &:before {
    width: 42vh;
    height: 42vh;
    inset: 0 0 0 0;
    border-radius: 100%;
    background: ${({ theme }) => theme.colors.secondary.main };
  }

  &:after {
    left: 28vw;
    width: 49vh;
    height: 49vh;
    bottom: -13vh;
    background: ${({ theme }) => theme.colors.primary.main };
  }
`;

export const HomeSectionWrapper = styled.div`
  z-index: 2;
  width: 100vw;
  height: 100dvh;
  backdrop-filter: blur(180px);
  background: ${({ theme }) => theme.colors.background.main }80; 
`;

export const PageContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: center.
`;

export const CurrentPageContentContainer = styled.main`
  width: 100vw;
  height: 100dvh;
  display: flex;
  overflow: hidden;
  max-width: 100vw;
  max-height: 100dvh;

  > * {
    min-width: 100dvw;
    height: 100dvh;
  }
`;