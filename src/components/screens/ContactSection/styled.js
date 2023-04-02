import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContactSectionWrapper = styled.section`
  gap: 38px;
  width: 100vw;
  display: flex;
  height: 100dvh;
  padding: 0 64px;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  transition: all ease-in-out .5s;

  &:after {
    content: '';
    height: 32px;
    width: 38vw;
    bottom: 86px;
    right: -2vw;
    position: absolute;
    border-radius: 8px;
    background: linear-gradient(
      90.31deg,
      ${({ theme }) => theme.colors.secondary.main} 0%,
      ${({ theme }) => theme.colors.primary.main } 100%
    );
  }

  > * {
    transition: all ease-in-out .5s;
  }

  &.not-active {
    > hgroup {
      margin: -28px -10vw 0 0;
      transform: rotate(-104deg);
    }

    > ul {
      margin: 18vw -48vw 0 0;
      transform: rotate(-80deg);
    }

    > a {
      margin: 50vh 0 0;
    }
  }

  @media ${({ theme }) => theme.media.desktop } {
    padding: 0 16vw;

    &:after {
      right: 28px;
    }
  }
`;

export const SectionTitle = styled.hgroup`
  position: relative;
  gap: 8px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  &:after {
    top: 14px;
    z-index: 1;
    width: 38vw;
    content: '';
    height: 20px;
    display: block;
    position: absolute;
    margin: 0 0 0 12vw;
    border-radius: 8px;
    opacity: .8;
    background: linear-gradient(
      90.31deg,
      ${({ theme }) => theme.colors.secondary.main} 0%,
      ${({ theme }) => theme.colors.primary.main } 100%
    );
  }

  > h2 {
    z-index: 2;
    width: 100%;
    display: flex;
    position: relative;
    text-align: center;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.typography.main};
    font-size: ${({ theme }) => theme.typography.size.h1};
    font-weight: ${({ theme }) => theme.typography.weight.bold };
  }

  > h3 {
    gap: 12px;
    display: flex;
    width: 100%;
    margin: 0;
    position: relative;
    text-align: center;
    letter-spacing: 8px;
    align-items: center;
    justify-content: center;
    transform: rotate(0deg);
    color: ${({ theme }) => theme.colors.typography.main};
    font-size: ${({ theme }) => theme.typography.size.h4};
    font-weight: ${({ theme }) => theme.typography.weight.regular };

    &:after, &:before {
      flex-grow: 1;
      content: '';
      height: 2px;
      display: block;
      border-radius: 2px;
      background: linear-gradient(
        90.31deg,
        ${({ theme }) => theme.colors.secondary.main} 0%,
        ${({ theme }) => theme.colors.primary.main } 100%
      );
    }
  }

  @media ${({ theme }) => theme.media.desktop } {
    &:after {
      width: 280px;
      margin: 0 0 0 12%;
    }

    > h2 {
      font-size: 58px;
    }
  }

  @media ${({ theme }) => theme.media.desktop } {
    > h3 {
      &:after, &:before {
        width: 84px;
        flex-grow: 0;
      }
    }
  }
`;

export const ContactsDetails = styled.ul`
  gap: 24px;
  width: 100%;
  display: flex;
  list-style: none;
  flex-direction: column;

  > li {
    gap: 14px;
    width: 100%;
    flex-grow: 1;
    display: flex;
    font-size: 32px;
    align-items: center;
    color: ${({ theme }) => theme.colors.typography.main};

    > div {
      display: flex;
      height: max-content;
      flex-direction: column;
      
      > strong {
        font-size: ${({ theme }) => theme.typography.size.h4 };
        font-weight: ${({ theme }) => theme.typography.weight.semibold };
      }

      > p {
        opacity: .8;
        font-size: ${({ theme }) => theme.typography.size.h5 };
        font-weight: ${({ theme }) => theme.typography.weight.regular };
      }
    }
  }

  @media ${({ theme }) => theme.media.desktop } {
    margin: 14px 0 0;
    flex-direction: row;

    > li {
      gap: 18px;
      font-size: 58px;
      flex-direction: column;
      justify-content: center;

      > div {
        > * {
          width: 100%;
          text-align: center;
        }
      }
    }
  }
`;

export const ContactMe = styled(Link)`
  width: 100%;
  height: 44px;
  display: grid;
  margin: 28px 0 0;
  place-items: center;
  border-radius: 28px;
  text-decoration: none;
  transition: .5s ease-out;
  color: ${({ theme }) => theme.colors.typography.main};
  font-weight: ${({ theme }) => theme.typography.weight.medium };
  border: 2px solid ${({ theme }) => theme.colors.typography.main};

  &:hover {
    background: ${({ theme }) => theme.colors.typography.main }1A;
  }

  @media ${({ theme }) => theme.media.desktop } {
    width: 42%;
  }
`;