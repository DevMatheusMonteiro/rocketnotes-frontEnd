import styled from "styled-components";

export const ContainerProfile = styled.div`
  height: 100vh;

  > header {
    padding: 3.2rem 6.4rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    svg {
      font-size: 3.2rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`;

export const Form = styled.form`
  padding: 0 6.4rem;
  max-width: 50rem;
  margin: 0 auto;

  > div:nth-child(4) {
    margin-top: 2.4rem;
  }
`;

export const Avatar = styled.div`
  max-width: 18.4rem;
  margin: 0 auto;
  position: relative;
  transform: translateY(-80px);

  > img {
    aspect-ratio: 1/1;
    border-radius: 50%;
    object-fit: cover;
    width: 100%;
    max-width: 18.4rem;
  }

  > label {
    cursor: pointer;
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    position: absolute;
    bottom: 7px;
    right: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: filter 0.3s ease-in-out;

    &:hover {
      filter: brightness(0.8);
    }

    svg {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }

    input {
      display: none;
    }
  }
`;
