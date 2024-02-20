import styled from "styled-components";

import background from "../../assets/bg.png";

export const ContainerSignUp = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  align-self: center;
  text-align: center;
  padding: 6.4rem;
  > h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  > h2 {
    font-size: 2.4rem;
    margin: 4.8rem 0;
  }

  > a {
    display: inline-block;
    margin-top: 12.4rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`;

export const Background = styled.div`
  flex: 1;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  }
`;
