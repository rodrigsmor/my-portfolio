import styled from "styled-components";

export const SeeMoreButtonContainer = styled.button`
  bottom: 24px;
  cursor: pointer;
  position: absolute;
  color: red;
  z-index: 51;

  &.hide {
    display: none;
  }
`;