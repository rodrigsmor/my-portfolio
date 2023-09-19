import styled from "styled-components";
import BackgroundImage from '../../../assets/images/images/bg-projects.jpg'

export const ProjectSectionContentContainer = styled.div`
  gap: 28px;
  width: 100vw;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  height: fit-content;
  transition: all .5s ease;
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
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  > .filterby_container {
    flex: 1;
    width: 100% !important;

    > button {
      width: 100%;
    }
  }

  @media ${({ theme }) => theme.media.desktop } {
    > .filterby_container {
      left: 0;
      width: fit-content !important;
      position: absolute;

      > button {
        width: fit-content;
      }
    }
  }
`;

export const TabsBarContainer = styled.ul`
  gap: 10px;
  width: 100%;
  display: flex;
  list-style: none;

  > * {
    flex: 1;
  }

  @media ${({ theme }) => theme.media.tablet } {
    gap: 18px;
    width: fit-content;

  }
`;

export const TabsBar = styled.button`
  height: 38px;
  width: 100%;
  display: flex;
  cursor: pointer;
  align-items: center;
  background: transparent;
  justify-content: center;
  transition: all .5s ease;
  border-radius: 12px;
  position: relative;
  transition: all .6s ease-in-out;
  border: 0px solid transparent;
  font-size: ${({ theme }) => theme.typography.size.h6 };
  font-weight: ${({ theme }) => theme.typography.weight.medium};

  &:after {
    bottom: 0;
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 2px;
    border-radius: 2px;
    transition: all .6s ease;
    background-image: linear-gradient(90.31deg, ${({ theme }) => theme.colors.secondary.main} 0%, ${({ theme }) => theme.colors.primary.main } 104.35%);
  }

  &:not(.current):hover {
    background: ${({ theme }) => theme.colors.typography.main }1a;
  }

  &.current {
    background: linear-gradient(90.31deg, ${({ theme }) => theme.colors.secondary.main} 0%, ${({ theme }) => theme.colors.primary.main } 104.35%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    &:after {
      width: 100%;
    }
  }

  @media ${({ theme }) => theme.media.tablet } {
    width: 89px;
    font-size: ${({ theme }) => theme.typography.size.h5 };
  }
`;

export const FiltersSelectedGroup = styled.ul`
  gap: 8px 14px;
  width: 100%;
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  list-style: none;
  transition: all .5s ease;
`;

export const ProjectsListing = styled.ul`
  gap: 24px;
  display: flex;
  list-style: none;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  
  @media screen and (max-width: 767px) {
    > li {
      flex: 1;
      flex-shrink: 0;
      min-width: 100%;
      max-width: 100%;
    }
  }

  @media ${({ theme }) => theme.media.tablet } {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(243.5px, 1fr));
  }
`;