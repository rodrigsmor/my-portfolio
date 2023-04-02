import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  top: 0;
  left: 0;
  z-index: 50;
  width: 100vw;
  height: 60px;
  display: flex;
  position: fixed;
  padding: 0 0 0 80px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.typography.main }1A;
`;

export const NavigationHeader = styled.nav`
  gap: 36px;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const NavigationPageOptions = styled.ul`
  gap: 14px;
  height: 100%;
  display: flex;
  list-style: none;
  position: relative;
  align-items: center;

  > li {
    width: 92px;
    height: 100%;
  }

  &:after {
    bottom: 0;
    width: 92px;
    height: 1px;
    content: '';
    display: block;
    position: absolute;
    transition: .3s all ease-out;
    background: ${({ theme }) => theme.colors.typography.main };
  }

  &.home:after {
    left: 0;
  }

  &.about-me:after {
    left: 106px;
  }

  &.projects:after {
    left: 212px;
  }

  &.contacts:after {
    left: 318px;
  }
`;

export const PagesLinksOptions = styled(Link)`
  height: 100%;
  display: grid;
  place-items: center;
  text-decoration: none;
  background: transparent;
  transition: all .3s ease-out;
  color: ${({ theme }) => theme.colors.typography.main };
  font-size: ${({ theme }) => theme.typography.size.h5 };
  font-weight: ${({ theme }) => theme.typography.weight.light };

  &:hover {
    background: ${({ theme }) => theme.colors.typography.main }0D;
  }

  &.selected {
    background: ${({ theme }) => theme.colors.typography.main }05;
    font-weight: ${({ theme }) => theme.typography.weight.medium };
  }
`;