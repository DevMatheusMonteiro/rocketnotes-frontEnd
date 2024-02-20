import styled from "styled-components";

export const ContainerCreateNote = styled.div`
  height: 100vh;
  display: grid;
  grid-template-areas: "header" "content";
  grid-template-rows: max-content auto;

  > main {
    grid-area: content;
    overflow-y: auto;
    width: 100%;
    padding: 4rem 6.4rem 6.4rem;
    grid-area: content;

    > header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 55rem;
      margin: 0 auto;

      > a {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
      }
    }
  }
`;

export const Form = styled.form`
  margin: 0 auto;
  margin-top: 3.2rem;
  max-width: 55rem;

  > textarea {
    width: 100%;
    height: 15rem;
    resize: none;
    border: 0;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 1.2rem;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  .tags {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.6rem;

    > div {
      max-width: 26rem;
      margin: 0;
    }
  }
`;
