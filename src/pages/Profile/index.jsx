import { useState, useEffect } from "react";

import api from "../../services/api";
import { useAuthContext } from "../../hooks/authContext";

import { ContainerProfile, Form, Avatar } from "./styles";

import { Link, useNavigate } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa";
import { CiCamera } from "react-icons/ci";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import Input from "../../components/Input";
import Button from "../../components/Button";

export default function Profile() {
  const { fetchUsers } = useAuthContext();

  const navigate = useNavigate();

  const { user, updateProfile } = useAuthContext();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarURL);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate() {
    const update = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword,
    };

    Object.assign(user, update);

    await updateProfile({ user, avatarFile });
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  useEffect(() => {
    fetchUsers();
  }, [name, email, oldPassword, newPassword, avatarFile]);

  return (
    <ContainerProfile>
      <header>
        <Link
          onClick={() => {
            navigate(-1);
          }}
        >
          <FaArrowLeft />
        </Link>
      </header>
      <Form>
        <Avatar>
          <img
            src={avatar}
            alt={`Foto ${user.name}`}
            title={`Foto ${user.name}`}
          />

          <label htmlFor="avatar">
            <CiCamera />

            <input id="avatar" type="file" onChange={handleChangeAvatar} />
          </label>
        </Avatar>

        <Input
          type="text"
          placeholder="Nome"
          icon={FiUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          icon={FiMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha Atual"
          icon={FiLock}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Nova Senha"
          icon={FiLock}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </ContainerProfile>
  );
}
