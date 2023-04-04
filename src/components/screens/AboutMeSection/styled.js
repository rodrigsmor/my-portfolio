import styled from "styled-components";

export const AboutMeSectionContainer = styled.section`
  gap: 18px;
  width: 100dvw;
  height: 100dvh;
  max-width: 100dvw;
  overflow: hidden;
  display: flex;
  padding: 0 16px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  transition: all .5s ease-out;

  > * {
    transition: all .5s ease-out;
  }

  > .section-main_summary {
    gap: 28px;
    display: flex;
    flex-direction: column;

    > hgroup {
      display: flex;
      width: fit-content;
      position: relative;

      &:after,&:before {
        content: '';
        display: block;
        position: absolute;
        background: linear-gradient(90.31deg,
          ${({ theme }) => theme.colors.secondary.main} 0%,
          ${({ theme }) => theme.colors.primary.main } 100%
        );
      }

      &:before {
        width: 14px;
        height: 48px;
        left: -4px;
        top: -8px;
      }

      &:after {
        z-index: 2;
        height: 6px;
        width: 108px;
        top: 44px;
        right: -14px;
      }
      
      > h1 {
        z-index: 3;
        display: flex;
        position: relative;
        align-items: center;
        color: ${({ theme }) => theme.colors.typography.main };
        font-size: ${({ theme }) => theme.typography.size.h1 };
        font-weight: ${({ theme }) => theme.typography.weight.extrabold};
      }
    }

    > ul {
      gap: 8px;
      z-index: 3;
      display: none;
      list-style: none;
      position: relative;
      flex-direction: column;

      &:before {
        top: 11px;
        content: '';
        width: 58px;
        height: 3px;
        right: 89%;
        display: block;
        position: absolute;
        background: linear-gradient(90.31deg,
          ${({ theme }) => theme.colors.secondary.main} 0%,
          ${({ theme }) => theme.colors.primary.main } 100%
        );
      }

      > li {
        font-size: ${({ theme }) => theme.typography.size.h5 };
        color: ${({ theme }) => theme.colors.typography.main }CC;
        font-weight: ${({ theme }) => theme.typography.weight.regular};
      }
    }
  }

  > .professional_summary {
    width: 80%;
    z-index: 3;
    display: flex;

    > p {
      width: 100%;
      text-align: center;
      color: ${({ theme }) => theme.colors.typography.main }CC;
      font-size: ${({ theme }) => theme.typography.size.h5};
      font-weight: ${({ theme }) => theme.typography.weight.light };
    }
  }

  &.not-active {
    gap: 68px;

    > .section-main_summary {
      gap: 84px;
    }

    > img {
      height: 12vh;
      transform: rotate(148deg);
    }
  }
  
  @media ${({ theme }) => theme.media.tablet } {
    gap: 48px;
    padding: 0 48px;
    flex-direction: row;

    > * {
      flex-grow: 1;
      flex-shrink: 0;
    }

    > .section-main_summary {
      > ul {
        display: flex;
        padding: 0 0 0 5vw;
      }
    }

    > .professional_summary {
      height: 38%;
      max-width: 50%;
      align-items: flex-end;
      justify-content: flex-end;

      > p {
        width: 382px;
        text-align: end;
      }
    }

    &.not-active {
      > .section-main_summary {
        margin: -35vh 0 0 28vw;
      }

      > .professional_summary {
        transform: rotate(-82deg);
      }

      > img {
        margin: 0 0 8vh;
        height: auto;
      }
    }
  }

  @media ${({ theme }) => theme.media.desktop } {
    padding: 0 16vw;
  }
`;

export const AboutMeIllustration = styled.img`
  z-index: 1;
  width: auto;
  height: 28vh;

  @media ${({ theme }) => theme.media.tablet } {
    height: auto;
    width: auto;
    position: absolute;
  }
`;