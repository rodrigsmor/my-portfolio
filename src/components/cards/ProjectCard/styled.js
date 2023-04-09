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

    > img {
      width: 100%;
      height: 96px;
      display: flex;
      object-fit: cover;
      border-radius: 12px;
      align-items: center;
      justify-content: center;
      image-rendering: pixelated;
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
    justify-content: space-between;

    > div {
      gap: 10px;
      display: flex;

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
        color: ${({ theme }) => theme.colors.typography.main}99;

        &:first-of-type {
          background: linear-gradient(90.31deg, ${({ theme }) => theme.colors.secondary.main} 0%, ${({ theme }) => theme.colors.primary.main } 104.35%);
        }
        
        &:not(:first-of-type) {
          background: transparent;
          color: ${({ theme }) => theme.colors.typography.main}99;
          border: 1px solid ${({ theme }) => theme.colors.typography.main}1A;

          > * {
            fill: ${({ theme }) => theme.colors.typography.main}99;
          }
        }
      }
    }
  }
`;