import styled from "styled-components";

export const SectionContentTemplateWrapper = styled.div`
  z-index: 20;
  width: 100vw;
  height: 100vh;
  bottom: -150%;
  background: transparent;
  transition: all .3s ease-out;
  position: absolute !important;

  &.opened {
    bottom: 0;
  }
`;