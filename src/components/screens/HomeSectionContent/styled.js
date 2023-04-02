import styled from "styled-components";
import BackgroundImage from '../../../assets/images/images/bg-home.jpg'

export const HomeSectionContentContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: fit-content;
  background: linear-gradient(0deg, rgba(43, 29, 82, 0.9), rgba(43, 29, 82, 0.9)), url(${BackgroundImage});
  background-repeat: repeat;
  background-size: cover;
  background-position: center;
`;

export const PresentationSection = styled.section`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  padding: 12.8vh 11.7vw;
  flex-direction: column;

  > h3 {
    gap: 18px;
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.typography.size.h3 };
    font-weight: ${({ theme }) => theme.typography.weight.regular };
    background: linear-gradient(180deg, ${({ theme }) => theme.colors.secondary.main} 0%, ${({ theme }) => theme.colors.primary.main } 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    &:after,&:before {
      width: 92px;
      height: 2px;
      min-height: 2px;
      content: '';
      display: block;
      border-radius: 2px;
      background: linear-gradient(90.31deg, ${({ theme }) => theme.colors.secondary.main} 0%, ${({ theme }) => theme.colors.primary.main } 104.35%);
      border-radius: 2px;
    }
  }

  > p {
    text-align: center;
    margin: 12px 98px 48px;
    color: ${({ theme }) => theme.colors.typography.main };
    font-size: ${({ theme }) => theme.typography.size.h5 };
    font-weight: ${({ theme }) => theme.typography.weight.light };
  }

  > span {
    width: 1px;
    height: 100%;
    opacity: 0.4;
    background: ${({ theme }) => theme.colors.typography.main };
  }
`;

export const WhoIAmSection = styled.section`
  gap: 48px;
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  padding: 12.8vh 11.7vw;
  justify-content: center;

  > figure {
    > img {
      height: auto;
      width: 288px;
    }
  }

  > div {
    flex-grow: 1;

    > h3 {
      gap: 18px;
      width: 100%;
      display: flex;
      align-items: center;
      font-size: ${({ theme }) => theme.typography.size.h3};
      font-weight: ${({ theme }) => theme.typography.weight.semibold};
      color: ${({ theme }) => theme.colors.secondary.main };

      &:before {
        width: 48px;
        height: 4px;
        min-height: 2px;
        content: '';
        display: block;
        border-radius: 2px;
        background: linear-gradient(90.31deg, ${({ theme }) => theme.colors.secondary.main} 0%, ${({ theme }) => theme.colors.primary.main } 104.35%);
        border-radius: 2px;
      }
    }

    > h4 {
      margin: 4px 0 24px;
      width: 100%;
      font-size: ${({ theme }) => theme.typography.size.h2};
      font-weight: ${({ theme }) => theme.typography.weight.bold };
      color: ${({ theme }) => theme.colors.typography.main };
    }

    > p {
      width: 100%;
      color: ${({ theme }) => theme.colors.typography.main };
      font-size: ${({ theme }) => theme.typography.size.h5};
      font-weight: ${({ theme }) => theme.typography.weight.light };
    }
  }
`;

export const InterestingsSection = styled.section`
  gap: 36px;
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  padding: 12.8vh 11.7vw;
  justify-content: center;
  flex-direction: column;

  > h3 {
    gap: 18px;
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.typography.size.h3};
    font-weight: ${({ theme }) => theme.typography.weight.semibold};
    color: ${({ theme }) => theme.colors.secondary.main};

    &:before, &:after {
      width: 48px;
      height: 4px;
      min-height: 2px;
      content: '';
      display: block;
      border-radius: 2px;
      background: linear-gradient(90.31deg, ${({ theme }) => theme.colors.secondary.main} 0%, ${({ theme }) => theme.colors.primary.main } 104.35%);
      border-radius: 2px;
    }
  }

  > ul {
    gap: 18px;
    display: flex;
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
    list-style: none;
    align-items: center;
    justify-content: center;

    > li {
      gap: 12px;
      flex-grow: 1;
      display: flex;
      padding: 14px;
      flex-shrink: 0;
      min-width: 336px;
      height: fit-content;
      align-items: center;
      border-radius: 16px;
      flex-direction: row;
      justify-content: center;
      max-width: calc((100% - (18px * 2)) / 3);
      border: 2px solid rgba(219, 211, 240, 0.1);
      color: ${({ theme }) => theme.colors.typography.main };
      background: ${({ theme }) => theme.colors.surface.dark };

      > div {
        width: 100%;
        max-width: 100%;

        > strong {
          font-size: ${({ theme }) => theme.typography.size.h4};
          font-weight: ${({ theme }) => theme.typography.weight.medium};
          color: ${({ theme }) => theme.colors.typography.main};
        }

        > p {
          font-size: ${({ theme }) => theme.typography.size.h6};
          font-weight: ${({ theme }) => theme.typography.weight.regular};
          color: ${({ theme }) => theme.colors.typography.main}99;
        }
      }
    }
  }
`;