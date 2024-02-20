import { createContext, useContext, useEffect, useState } from "react";

import api from "../services/api";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/session", { email, password });
      const { user, token } = response.data;

      delete user.password;

      localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
      localStorage.setItem("@rocketnotes:token", token);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({ user, token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível logar!");
      }
    }
  }

  async function signOut() {
    localStorage.removeItem("@rocketnotes:token");
    localStorage.removeItem("@rocketnotes:user");

    setData({});
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();

        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch("/users/avatar", fileUploadForm);

        user.avatar = response.data.avatar;
      }

      await api.put("/users", user);

      delete user.password;
      delete user.old_password;

      localStorage.setItem("@rocketnotes:user", JSON.stringify(user));

      setData({ user, token: data.token });

      alert("Perfil atualizado com sucesso!");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível atualizar!");
      }
    }
  }

  async function fetchUsers() {
    try {
      const token = localStorage.getItem("@rocketnotes:token");
      const user = localStorage.getItem("@rocketnotes:user");

      if (token && user) {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        const userParse = JSON.parse(user);

        await api.get("/users", userParse.id);

        setData({
          token,
          user: userParse,
        });
      }
    } catch (error) {
      if (error.response.status === 401) {
        localStorage.removeItem("@rocketnotes:user");
        localStorage.removeItem("@rocketnotes:token");
        setData({});
        alert("Sua sessão expirou!");
      }
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        fetchUsers,
        signIn,
        signOut,
        updateProfile,
        user: data.user,
      }}
      onClick={(e) => console.log(e)}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
