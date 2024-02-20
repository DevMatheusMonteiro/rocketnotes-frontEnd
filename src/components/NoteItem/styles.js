import styled from "styled-components";

export const ContainerNoteItem = styled.div`
  display: flex;
  align-items: stretch;
  width: 100%;
  height: 5.6rem;
  border-radius: 1rem;
  padding: 0 1.6rem;
  background-color: ${({ theme, $isnew }) =>
    $isnew ? "transparent" : theme.COLORS.BACKGROUND_900};
  border: ${({ theme, $isnew }) =>
    $isnew
      ? `2px dashed ${theme.COLORS.GRAY_100}`
      : theme.COLORS.BACKGROUND_900};

  & + & {
    margin-top: 2.4rem;
  }

  > input {
    width: 100%;
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > button {
    background-color: transparent;
    border: none;
    color: ${({ theme, $isnew }) =>
      $isnew ? theme.COLORS.ORANGE : theme.COLORS.RED};

    > svg {
      font-size: 2.2rem;
    }
  }
`;
