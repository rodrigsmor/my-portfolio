import styled from "styled-components";

export const FilterByContainer = styled.div`
  top: 0;
  height: fit-content;
  width: fit-content;
  position: relative;
`;

export const FilterButton = styled.button`
  gap: 10px;
  height: 38px;
  padding: 0 14px;
  justify-content: center;
  background: transparent;
  border-radius: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all .5s ease-out;
  font-size: ${({ theme }) => theme.typography.size.h5 };
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  border: 2px solid ${({ theme }) => theme.colors.typography.main}1A;
  color: ${({ theme }) => theme.colors.typography.main}BF;

  &:hover {
    background: ${({ theme }) => theme.colors.typography.main}0D;
  }
`;

export const FilterForm = styled.form`
  top: 46px;
  width: 100%;
  height: 50dvh;
  z-index: 25;
  padding: 14px;
  gap: 14px;
  display: flex;
  flex-direction: column;
  position: absolute;
  opacity: 0;
  display: flex;
  transition: all .3s ease-out;
  border-radius: 16px;
  pointer-events: none;
  background: ${({ theme }) => theme.colors.surface.main };
  border: 2px solid ${({ theme }) => theme.colors.typography.main}1A;

  &.open {
    opacity: 1;
    pointer-events: all;
  }

  > fieldset {
    gap: 14px;
    width: 100%;
    display: flex;
    flex: 1;
    align-items: center;
    flex-direction: column;
    border: 0 solid transparent;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    > legend {
      width: 100%; 
      display: flex;
      text-align: center;
      justify-content: center;
      font-size: ${({ theme }) => theme.typography.size.h4};
      font-weight: ${({ theme }) => theme.typography.weight.semibold};
      color: ${({ theme }) => theme.colors.typography.main}99;
    }

    > ul {
      gap: 8px;
      flex-wrap: wrap;
      width: 100%;
      list-style: none;
      display: flex;
      max-width: 100%;
      margin: 14px 0 0;
      transition: all .3S ease;
    }
  }

  > .filterby_button-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 14px;

    > * {
      flex: 1;
      height: 40px;
    }
  }

  @media ${({ theme }) => theme.media.desktop } {
    width: 308px;
    height: 380px;
  }
`;