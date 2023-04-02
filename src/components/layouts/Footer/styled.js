import styled from "styled-components";

export const FooterContainer = styled.footer`
  right: 0;
  bottom: 0;
  z-index: 50;
  width: 100vw;
  height: 68px;
  display: flex;
  padding: 0 80px;
  position: fixed;
  align-items: center;
  background: transparent;
  justify-content: space-between;
`;

export const SocialMedias = styled.ul`
  gap: 24px;
  display: flex;
  list-style: none;
  align-items: center;

  > li {
    opacity: 1;
    cursor: pointer;
    transition: all .5s ease-out;

    &:hover {
      opacity: 0.4;
    }
  }
`;

export const ProgressIndicator = styled.div`
  gap: 14px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.typography.main };

  > strong {
    width: 46px;
    text-align: center;
    font-size: ${({ theme }) => theme.typography.size.h2 };
    font-weight: ${({ theme }) => theme.typography.weight.bold };
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