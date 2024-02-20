import styled from "styled-components";

import { Link } from "react-router-dom";

export const ContainerHeader = styled.header`
  grid-area: header;

  width: 100%;
  height: 10.5rem;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 8rem;
`;

export const Profile = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 0.9rem;
  color: ${({ theme }) => theme.COLORS.WHITE};
  > img {
    aspect-ratio: 1/1;
    border-radius: 50%;
    width: 7rem;
    height: 7rem;
    object-fit: cover;
  }

  > div {
    display: flex;
    flex-direction: column;

    small {
      font-size: 1.4rem;
      color: var(--gray-100);
    }

    strong {
      font-size: 1.8rem;
      font-weight: 700;
    }
  }
`;

export const Logout = styled.button`
  background-color: transparent;
  border: 0;

  > svg {
    font-size: 3.6rem;
    color: var(--gray-100);
  }
`;
