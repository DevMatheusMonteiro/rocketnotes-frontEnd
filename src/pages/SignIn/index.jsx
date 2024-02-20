import { useState } from "react";

import { ContainerSignIn, Form, Background } from "./styles";

import { useAuthContext } from "../../hooks/authContext";

import { FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";

import Input from "../../components/Input";
import Button from "../../components/Button";

export default function SignIn() {
  const { signIn, user } = useAuthContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <ContainerSignIn>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Faça seu login</h2>

        <Input
          placeholder="E-mail"
          type="email"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/signup">Criar conta</Link>
      </Form>
      <Background></Background>
    </ContainerSignIn>
  );
}
