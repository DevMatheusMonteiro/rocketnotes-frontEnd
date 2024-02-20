import { RiShutDownLine } from "react-icons/ri";

import { useAuthContext } from "../../hooks/authContext";

import { ContainerHeader, Logout, Profile } from "./styles";

import { useNavigate } from "react-router-dom";

import api from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export default function Header() {
  const { user, signOut } = useAuthContext();
  const navigate = useNavigate();

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  return (
    <ContainerHeader>
      <Profile to="/profile">
        <img
          src={avatarURL}
          alt={`Foto ${user.name}`}
          title={`Foto ${user.name}`}
        />

        <div>
          <small>Bem vindo,</small>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout
        onClick={() => {
          signOut();

          navigate("/");
        }}
      >
        <RiShutDownLine />
      </Logout>
    </ContainerHeader>
  );
}
