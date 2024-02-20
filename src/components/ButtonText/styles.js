import styled from "styled-components";

export const ContainerButtonText = styled.button`
  background: transparent;
  border: 0;
  color: ${({ theme, $isactive }) =>
    $isactive === "true" ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};
`;
