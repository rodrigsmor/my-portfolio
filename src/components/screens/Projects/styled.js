import styled from "styled-components";

export const ProjectsContainer = styled.section`
  display: flex;
  padding: 0 16px;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  transition: all .5s ease-out;

  > *, > * > * {
    transition: all .5s ease-out;
  }

  > .content-wrapper_projects {
    width: 100%;
    display: flex;
    padding: 0 16px;
    position: relative;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    &:after {
      height: 9px;
      content: '';
      width: 36vw;
      display: block;
      position: absolute;
      left: 16px;
      bottom: -24px;
      border-radius: 4px;
      transform: translateY(0);
      transition: all .5s ease-out;
      background: linear-gradient(
        90.31deg,
        ${({ theme }) => theme.colors.secondary.main} 0%,
        ${({ theme }) => theme.colors.primary.main} 100%
      );
    }
    
    > h1 {
      z-index: 5 !important;
      position: relative;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.typography.main};
      font-size: ${({ theme }) => theme.typography.size.h1 };
      font-weight: ${({ theme }) => theme.typography.weight.extrabold };

      &:before {
        z-index: -1;
        top: 42.5px;
        width: 46vw;
        right: -18px;
        content: '';
        opacity: .8;
        height: 15px;
        position: absolute;
        border-radius: 4px;
        background: linear-gradient(
          90.31deg,
          ${({ theme }) => theme.colors.secondary.main} 0%,
          ${({ theme }) => theme.colors.primary.main} 100%
        );
      }
    }

    > h2 {
      width: 100%;
      text-align: center;
      color: ${({ theme }) => theme.colors.typography.main}CC;
      font-size: ${({ theme }) => theme.typography.size.h4 };
      font-weight: ${({ theme }) => theme.typography.weight.medium };
    }

    > p {
      width: 100%;
      text-align: center;
      margin: 24px 0 0 0;
      font-size: ${({ theme }) => theme.typography.size.h5};
      color: ${({ theme }) => theme.colors.typography.main}99;
      font-weight: ${({ theme }) => theme.typography.weight.regular };
    }
  }

  &.not-active {
    > .content-wrapper_projects {
      > h1 {
        transform: translateY(-238px) rotate(80deg);
      }

      > h2 {
        margin: 68px 0 120px;
        transform: translateY(320px);
      }

      > p {
        transform: translateY(48px) rotate(120deg);
      }

      &:after {
        transform: translateY(22vw) rotate(288deg);
      }

      > .preview-images {
        > div {
          &:nth-of-type(2) {
            transform: translateY(-38vw) translateX(38px);
          }
        }
      }
    }
  }

  @media ${({ theme }) => theme.media.tablet } {
    padding: 0 16vw;

    > .content-wrapper_projects {
      &:after {
        width: 231px;
        left: 9vw;
      }
      
      > h1 {
        font-size: 64px;

        &:before {
          width: 254px;
          height: 15px;
          top: 56.5px;
          right: -36px;
        }
      }

      > h3 {
        font-size: ${({ theme }) => theme.typography.size.h3 };
      }
    }
  }
`;

export const ImagePreviewWrapper = styled.div`
  gap: 8px;
  top: -26vw;
  display: flex;
  position: absolute;
  align-items: center;
  transition: all .5s ease-out;

  &:before {
    content: '';
    width: 38px;
    height: 109px;
    z-index: -1;
    left: -14px;
    top: -5%;
    border-radius: 8px;
    position: absolute;
    background: linear-gradient(
      90.31deg,
      ${({ theme }) => theme.colors.secondary.main} 0%,
      ${({ theme }) => theme.colors.primary.main} 100%
    );
  }
  
  @media ${({ theme }) => theme.media.tablet } {
    gap: 15px;
    top: -112%;
  }
`;

export const DivImage = styled.div`
  width: 24vw;
  height: 24vw;
  border-radius: 4vw;
  transition: all .5s ease-out;
  transform: translateY(0);

  &:nth-of-type(2) {
    width: 32vw;
    height: 32vw;
    border-radius: 5.8vw;
  }

  background: linear-gradient(180deg, #130D24 0%, rgba(19, 13, 36, 0.2) 0%, #130D24 78.5%), url(${props => props.imageLink});
  background-size: cover;

  @media ${({ theme }) => theme.media.tablet } {
    width: 11.5vw;
    height: 11.5vw;
    border-radius: 0.8vw;

    &:nth-of-type(2) {
      width: 13.17vw;
      height: 13.17vw;
      border-radius: 1.2vw;
    }
  }
`;