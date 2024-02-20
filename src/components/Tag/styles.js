import styled from "styled-components";

export const ContainerTag = styled.span`
  font-size: 1.4rem;
  padding: 0.8rem 1.6rem;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  margin-right: 0.8rem;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border-radius: 0.8rem;
`;
