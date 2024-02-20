import styled from "styled-components";

export const ContainerNote = styled.button`
  width: 100%;
  text-align: left;
  border: 0;
  border-radius: 1rem;
  padding: 2.4rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  margin-bottom: 1.6rem;

  > span {
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 2.4rem;
  }

  > div {
    margin-top: 3.2rem;
  }
`;
