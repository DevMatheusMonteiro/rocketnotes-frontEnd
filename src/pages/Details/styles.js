import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "header"
    "content";
  grid-template-rows: max-content auto;

  height: 100vh;
  width: 100%;

  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 0 6.4rem;
  }
`;

export const Content = styled.article`
  color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 6.4rem 0;
  max-width: 556px;
  margin-inline: auto;

  display: flex;
  flex-direction: column;

  > h1 {
    margin: 6.4rem 0 2.4rem;
  }

  > p {
    text-align: justify;
  }

  > button:first-child {
    align-self: end;
  }
`;

export const Links = styled.ul`
  list-style: none;

  > li {
    a {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  > li + li {
    margin-top: 1.6rem;
  }
`;
