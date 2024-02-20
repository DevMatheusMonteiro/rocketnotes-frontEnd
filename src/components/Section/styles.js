import styled from "styled-components";

export const ContainerSection = styled.section`
  width: 100%;
  margin-top: 2.8rem;
  color: ${({ theme }) => theme.COLORS.WHITE};

  &:last-of-type {
    margin-bottom: 8rem;
  }

  > h2 {
    margin-bottom: 2.4rem;
    font-size: 2rem;
    font-weight: 400;
    padding-bottom: 1.6rem;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;
