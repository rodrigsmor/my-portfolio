import styled from "styled-components";

export const ProjectCardContainer = styled.article`
  gap: 14px;
  display: flex;
  padding: 12px;
  border-radius: 18px;
  flex-direction: column;
  border: 0.76px solid ${({ theme }) => theme.colors.typography.main}1A;
  backdrop-filter: blur(18px);
  background-color: ${({ theme }) => theme.colors.background.main }33;

  > header {
    width: 100%;
    display: flex;
    max-width: 100%;
    overflow: hidden;
    min-width: 100%;
    flex-direction: column;

    > figure {
      width: 100%;
      height: 96px;
      display: flex;
      max-width: 100%;
      overflow: hidden;
      max-height: 96px;
      align-items: center;
      justify-content: center;
      border-radius: 12px;

      > img {
        width: 100%;
        height: 96px;
        display: flex;
        margin: auto;
        object-fit: cover;
        border-radius: 12px;
        align-items: center;
        justify-content: center;
        image-rendering: pixelated;
        transition: all .5s ease-in-out;

        &:hover {
          width: 140%;
          height: 160%;
        }
      }
    }

    > h5 {
      max-width: 100%;
      margin: 15px 0 2px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: ${({ theme }) => theme.typography.size.h5};
      color: ${({ theme }) => theme.colors.typography.main };
      font-weight: ${({ theme }) => theme.typography.weight.semibold};
    }

    > p {
      width: 100%;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 12px;
      line-clamp: 1;
      white-space: nowrap;
      color: ${({ theme }) => theme.colors.typography.main}99;
      font-weight: ${({ theme }) => theme.typography.weight.regular};
    }
  }

  > footer {
    width: 100%;
    display: flex;
    min-width: 100%;
    align-items: flex-end;
    justify-content: space-between;

    > .links-project {
      gap: 10px;
      display: flex;
      width: fit-content;

      > a {
        width: 36px;
        display: grid;
        min-width: 36px;
        min-height: 34px;
        max-height: 34px;
        place-items: center;
        background-color: red;
        border-radius: 6px;
        flex-shrink: 0;
        transition: all .5s ease;
        color: ${({ theme }) => theme.colors.typography.main}99;

        &:first-of-type {
          background: linear-gradient(90.31deg, ${({ theme }) => theme.colors.secondary.main} 0%, ${({ theme }) => theme.colors.primary.main } 104.35%);

          &:hover {
            filter: brightness(60%);
          }
        }
        
        &:not(:first-of-type) {
          background: transparent;
          color: ${({ theme }) => theme.colors.typography.main}99;
          border: 1px solid ${({ theme }) => theme.colors.typography.main}1A;

          > * {
            fill: ${({ theme }) => theme.colors.typography.main}99;
          }

          &:hover {
            background: ${({ theme }) => theme.colors.typography.main}1A;
          }
        }
      }

    }

    > .project-languages {
      gap: 4px;
      display: flex;
      width: fit-content;
      height: fit-content;

      > div {
        width: 12px;
        height: 12px;
        display: grid;
        min-width: 12px;
        overflow: hidden;
        min-height: 12px;
        border-radius: 2px;
        place-items: center;

        > img {
          width: 12px;
          height: 12px;
          min-width: 12px;
          min-height: 12px;
        }

        &:nth-of-type(4) {
          border: 1px solid ${({ theme }) => theme.colors.typography.main}1A;

          > img {
            display: none;
          }

          &:after {
            content: '...';
            font-size: 8px;
            line-height: 2px;
            opacity: .5;
          }
        } 
      }

    }
  }
`;