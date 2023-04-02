import styled from "styled-components";

export const HomeSectionContainer = styled.section`
  width: 100vw;
  display: flex;
  height: 100dvh;
  padding: 0 16px;
  overflow: hidden;
  min-width: 100vw;
  max-width: 100vw;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  &.not-active {
    > div {
      margin: -28px 0 0 -80vw;
      transform: rotate(-36deg);
    }

    > hgroup {
      transform: rotate(24deg);
      margin: 8px -120vw 0 0;

      > h1 {
        margin: 0 -50vw 28px 0;
      }

      > h2 {
        transform: rotate(-24deg);
        margin: 86vw 40vw 0 0;
      }
    }
  }

  > *, > * > * {
    position: static;
    transition: all .5s ease-out;
  }

  @media ${({ theme }) => theme.media.desktop } {
    padding: 0 16vw;
  }
`;

export const SectionTitle = styled.hgroup`
  display: flex;
  margin: 8px 0 0;
  position: relative;
  align-items: center;
  flex-direction: column;
  
  > h1 {
    z-index: 5;
    font-size: 74px;
    max-width: 100%;
    margin: 0 0 12px;
    line-height: 80px;
    text-align: center;
    font-weight: ${({ theme }) => theme.typography.weight.extrabold };
  }

  &:after,&:before {
    content: '';
    z-index: -1;
    opacity: 0.6;
    display: block;
    position: absolute;
    background: linear-gradient(
      90.31deg,
      ${({ theme }) => theme.colors.secondary.main} 0%,
      ${({ theme }) => theme.colors.primary.main } 100%
    );
  }

  &:before {
    top: 53.5px;
    height: 42px;
    width: 48vw;
    left: 0vw;
  }

  &:after {
    content: '';
    height: 9px;
    width: 201px;
    bottom: 0px;
    right: 0px;
  }
  
  @media ${({ theme }) => theme.media.desktop } {
    > h1 {
      font-size: 86px;
      line-height: 108px;
      min-width: fit-content;
    }

    &:after {
      bottom: 13px;
      right: -146px;
    }
  }

  @media ${({ theme }) => theme.media.tablet } {
    &:before {
      width: 368px;
      left: -108.5px;
    }
  }
`;

export const Subtitle = styled.h2`
  opacity: 0.8;
  text-align: center;
  margin: 12px 0 0 0;
  max-width: 100%;
  font-size: ${({ theme }) => theme.typography.size.h4 };
  color: ${({ theme }) => theme.colors.typography.main };
  font-weight: ${({ theme }) => theme.typography.weight.regular};
  
  @media ${({ theme }) => theme.media.desktop } {
    text-align: end;
    margin: 0 -476px 0 0;
    min-width: max-content;
  }
`;

export const GreetingsText = styled.div`
  width: 100%;
  display: flex;
  word-spacing: 2px;
  align-items: center;

  &:before {
    content: '';
    height: 3px;
    width: 15vw;
    max-width: 100px;
    border-radius: 2px;
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.secondary.main} 0%,
      ${({ theme }) => theme.colors.primary.main } 100%
    );
    margin: 0 8px 0 0;
  }

  > p {
    font-size: ${({ theme }) => theme.typography.size.h5 };
    font-weight: ${({ theme }) => theme.typography.weight.regular };

    strong {
      font-weight: ${({ theme }) => theme.typography.weight.regular };
      background: linear-gradient(
        180deg,
        ${({ theme }) => theme.colors.secondary.main } 0%,
        ${({ theme }) => theme.colors.primary.main } 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }

  @media ${({ theme }) => theme.media.desktop } {
    &:before {
      width: 5vw;
      max-width: 5vw;
      margin: 0 18px 0 0;;
    }
  }
`;