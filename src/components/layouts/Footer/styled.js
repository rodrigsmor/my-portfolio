import styled from "styled-components";

export const FooterContainer = styled.footer`
  right: 0;
  bottom: 0;
  z-index: 50;
  width: 100vw;
  height: 68px;
  display: flex;
  position: fixed;
  padding: 0 24px;
  align-items: center;
  background: transparent;
  justify-content: space-between;
  
  @media ${({ theme }) => theme.media.desktop } {
    padding: 0 80px;
  }
`;

export const SocialMedias = styled.ul`
  gap: 34px;
  width: 100%;
  display: grid;
  list-style: none;
  align-items: center;
  grid-template-columns: 28px 28px 1fr 28px 28px;
  
  > li {
    opacity: 1;
    cursor: pointer;
    transition: all .5s ease-out;
    font-size: 28px;
    
    &:hover {
      opacity: 0.4;
    }

    &:nth-of-type(3) {
      grid-column-end: 5;
      grid-column-start: 4;
    }

    &:nth-of-type(4) {
      grid-column-end: 6;
      grid-column-start: 5;
    }
  }
  
  @media ${({ theme }) => theme.media.desktop } {
    gap: 24px;
    display: flex;
    width: fit-content;

    li {
      font-size: 24px;
    }
  }
`;

export const ProgressIndicator = styled.div`
  gap: 14px;
  display: none;
  align-items: center;
  color: ${({ theme }) => theme.colors.typography.main };

  > strong {
    width: 46px;
    text-align: center;
    font-size: ${({ theme }) => theme.typography.size.h2 };
    font-weight: ${({ theme }) => theme.typography.weight.bold };
  }

  @media ${({ theme }) => theme.media.desktop } {
    display: flex;
  }
`;

export const ProgressDetailed = styled.div`
  gap: 4px;
  width: 218px;
  display: flex;
  flex-direction: column;

  > p {
    color: ${({ theme }) => theme.colors.typography.main };
    font-size: ${({ theme }) => theme.typography.size.h5 };
    font-weight: ${({ theme }) => theme.typography.weight.medium };
  }

  > .progress-background {
    height: 4px;
    width: 100%;
    overflow: hidden;
    position: relative;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.typography.main }1A;

    > div {
      content: '';
      width: ${({ progressValue }) => progressValue};
      height: 4px;
      border-radius: 4px;
      position: absolute;
      background: ${({ theme }) => theme.colors.typography.main };
    }
  }
`;