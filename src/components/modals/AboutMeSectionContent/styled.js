import styled from "styled-components";
import BackgroundImage from '../../../assets/images/images/bg-about.jpg'

export const AboutMeSectionContainer = styled.div`
  width: 100vw;
  min-height: 100dvh;
  height: fit-content;
  background: linear-gradient(0deg, rgba(43, 29, 82, 0.9), rgba(43, 29, 82, 0.9)), url(${BackgroundImage});
  background-repeat: repeat;
  background-size: cover;
  background-position: center;
`;

export const ContentSectionWrappers = styled.section`
  gap: 48px;
  width: 100%;
  display: flex;
  min-height: 100vh;
  padding: 120px 16px;
  flex-direction: column;

  &:nth-of-type(2) {
    justify-content: center;
  }

  > header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    > h3 {
      z-index: 2;
      gap: 14px;
      display: flex;
      position: relative;
      align-items: center;
      text-transform: uppercase;
      font-size: ${({ theme }) => theme.typography.size.h2};
      font-weight: ${({ theme }) => theme.typography.weight.bold};

      &:before {
        z-index:-1;
        bottom: 3px;
        width: 160px;
        height: 12px;
        right: -40.5px;
        min-height: 12px;
        content: '';
        display: block;
        position: absolute;
        background: linear-gradient(90.31deg, ${({ theme }) => theme.colors.secondary.main} 0%, ${({ theme }) => theme.colors.primary.main } 104.35%);
        border-radius: 8px;
      }
    }
  }

  > article {
    gap: 36px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    > figure {
      width: 62%;
      z-index: 20;
      position: relative;
      padding: 0 0 13px 19px;
      
      &:before {
        left: 0;
        bottom: 0;
        content: '';
        z-index: 20;
        display: block;
        position: absolute;
        border-radius: 24px;
        width: calc(100% - 19px);
        height: calc(100% - 13px);
        background: ${({ theme }) => theme.colors.primary.main }66;
      }

      > img {
        width: 100%;
        height: auto;
        z-index: 25;
        position: relative;
        border-radius: 24px;
        image-rendering: pixelated;

      }
    }
  }

  > ul {
    gap: 14px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  @media ${({ theme }) => theme.media.tablet } {
    
    > article {
      width: 100%;
      flex-direction: row;
      align-items: flex-end;
    }
  }

  @media ${({ theme }) => theme.media.desktop } {
    padding: 12.8vh 11.7vw;

    > article {
      gap: 56px;

      > figure {
        width: 24dvw;
        min-width: 285px;
      }
    }
  }
`;

export const ArticleContentWrapper = styled.div`
  gap: 24px;
  width: 100%;
  display: flex;
  position: relative;
  padding: 0 0 0 48px;
  flex-direction: column;

  > h4 {
    height: 38px;
    width: fit-content;
    position: relative;
    font-size: ${({ theme }) => theme.typography.size.h3};
    font-weight: ${({ theme }) => theme.typography.weight.semibold };
    background: linear-gradient(90.31deg, ${({ theme }) => theme.colors.secondary.main} 0%, ${({ theme }) => theme.colors.primary.main } 104.35%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    &:after {
      content: '';
      width: 238px;
      height: 4px;
      position: absolute;
      bottom: 0;
      left: 0;
      border-radius: 4px;
      background: linear-gradient(90.31deg, ${({ theme }) => theme.colors.secondary.main} 0%, ${({ theme }) => theme.colors.primary.main } 104.35%);
    }
  }

  > div {
    gap: 12px;
    width: 100%;
    display: flex;
    max-width: 100%;
    overflow: hidden;
    flex-direction: column;

    > p {
      width: 100%;
      text-align: justify;
      text-indent: 20px;
      color: ${({ theme }) => theme.colors.typography.main }CC;
      font-size: ${({ theme }) => theme.typography.size.h5 };
      font-weight: ${({ theme }) => theme.typography.weight.regular };
    }
  }

  > a {
    width: 100%;
    height: 46px;
    align-self: flex-end;
  }

  > aside {
    top: 0;
    left: 0;
    gap: 18px;
    height: 100%;
    display: flex;
    position: absolute;
    align-items: center;
    flex-direction: column;
    opacity: .4;

    > p {
      rotate: -180deg;
      height: fit-content;
      writing-mode: vertical-lr;
      background: linear-gradient(180deg, ${({ theme }) => theme.colors.secondary.main} 0%, ${({ theme }) => theme.colors.primary.main } 104.35%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }

    > span {
      flex: 1;
      width: 1px;
      background-color: red;
      background: linear-gradient(180deg, ${({ theme }) => theme.colors.secondary.main} 0%, ${({ theme }) => theme.colors.primary.main } 104.35%);
    }
  }
  
  @media ${({ theme }) => theme.media.tablet }  {
    padding: 0 0 0 46px;

    > p {
      margin: 36px 0 29px;
    }

    > a {
      width: 230px;
    }
  }
`;

export const KnowledgesCard = styled.li`
  gap: 12px;
  padding: 14px;
  display: flex;
  width: fit-content;
  border-radius: 120px;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary.main}1a;
  border: 1px solid ${({ theme }) => theme.colors.primary.main }99;

  > figure {
    width: 40px;
    height: 40px;
    display: grid;
    overflow: hidden;
    place-items: center;
    border-radius: 100%;
    background: linear-gradient(180deg, ${({ theme }) => theme.colors.secondary.main} 0%, ${({ theme }) => theme.colors.primary.main } 104.35%);

    > img {
      width: 32px;
      height: 32px;
      max-width: 32px;
      max-height: 32px;
    }
  }

  > div {
    width: fit-content;

    > .knowledge_Title {
      font-size: ${({ theme }) => theme.typography.size.h4 };
      color: ${({ theme }) => theme.colors.typography.main }CC;
      font-weight: ${({ theme }) => theme.typography.weight.semibold };
    }

    > .knowledge_Level {
      font-size: ${({ theme }) => theme.typography.size.h6};
      color: ${({ theme }) => theme.colors.typography.main}99;
      font-weight: ${({ theme }) => theme.typography.weight.regular };
    }
  }
`;