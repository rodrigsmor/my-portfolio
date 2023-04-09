import styled from "styled-components";
import BackgroundImage from '../../../assets/images/images/bg-projects.jpg'

export const ProjectSectionContentContainer = styled.div`
  width: 100vw;
  min-height: 100dvh;
  height: fit-content;
  background: linear-gradient(0deg, rgba(43, 29, 82, 0.9), rgba(43, 29, 82, 0.9)), url(${BackgroundImage});
  background-repeat: repeat;
  background-size: cover;
  background-position: center;
  padding: 120px 16px;

  @media ${({ theme }) => theme.media.desktop } {
    padding: 12.8vh 11.7vw;

  }
`;

export const HeaderSectionContent = styled.header`
  gap: 28px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;

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
      border-radius: 2px;
      position: absolute;
      background: linear-gradient(90.31deg, ${({ theme }) => theme.colors.secondary.main} 0%, ${({ theme }) => theme.colors.primary.main } 104.35%);
      border-radius: 8px;
    }
  }

  @media ${({ theme }) => theme.media.desktop } {
  }
`;

export const FilterProjectsTabBar = styled.nav`
  gap: 12px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media ${({ theme }) => theme.media.desktop } {

  }
`;