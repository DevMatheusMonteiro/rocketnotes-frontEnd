import { useEffect, useState } from "react";

import { ContainerCreateNote, Form } from "./styles";

import { Link, useNavigate } from "react-router-dom";

import api from "../../services/api";
import { useAuthContext } from "../../hooks/authContext";

import Header from "../../components/Header";
import Input from "../../components/Input";
import Section from "../../components/Section";
import NoteItem from "../../components/NoteItem";
import Button from "../../components/Button";

export default function CreateNote() {
  const { fetchUsers } = useAuthContext();

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState(null);

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  function handleAddLink() {
    if (!newLink) {
      return;
    }

    setLinks((prevState) => [...prevState, newLink]);
    setNewLink("");
  }

  function handleRemoveLink(deleted) {
    const isSure = confirm("Você tem certeza que deseja excluir o link?");

    if (!isSure) {
      return;
    }

    setLinks((prevState) => prevState.filter((link) => link !== deleted));
  }

  function handleAddTag() {
    if (!newTag) {
      return;
    }

    let sameTag = tags.includes(newTag);

    if (sameTag) {
      return alert("Já existe uma tag com esse nome");
    }

    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(key) {
    const isSure = confirm("Você tem certeza que deseja excluir a tag?");

    if (!isSure) {
      return;
    }

    const filteredTags = tags.filter((tag, index) => {
      return index !== key;
    });

    setTags(filteredTags);
  }

  async function handleCreateNote() {
    try {
      if (!title) {
        return alert("Informe o título!");
      }

      if (newLink) {
        const isSure = confirm(
          "Você tem um link digitado que não foi adicionado. Deseja continuar?"
        );

        if (!isSure) {
          return;
        }
      }

      if (newTag) {
        const isSure = confirm(
          "Você tem uma tag digitada que não foi adicionada. Deseja continuar?"
        );

        if (!isSure) {
          return;
        }
      }

      await api.post("/notes", { title, description, links, tags });

      alert("Nota adicionada com sucesso!");
      navigate("/");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível adicionar a nota");
      }
    }
  }

  useEffect(() => {
    fetchUsers();
  }, [title, description, newTag, newLink]);

  return (
    <ContainerCreateNote>
      <Header />

      <main>
        <header>
          <h1>Criar nota</h1>
          <Link onClick={() => navigate(-1)}>Voltar</Link>
        </header>

        <Form>
          <Input
            placeholder="Título"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Observações"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <Section title="Links úteis">
            {links.map((link, index) => {
              return (
                <NoteItem
                  key={String(index)}
                  value={link}
                  onClick={() => handleRemoveLink(link)}
                />
              );
            })}

            <NoteItem
              placeholder="Novo link"
              isnew
              value={newLink}
              onClick={handleAddLink}
              onChange={(e) => setNewLink(e.target.value)}
            />
          </Section>
          <Section title="Marcadores">
            <div className="tags">
              {tags.map((tag, index) => {
                return (
                  <NoteItem
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(index)}
                  />
                );
              })}
              <NoteItem
                placeholder="Nova tag"
                isnew
                value={newTag}
                onClick={handleAddTag}
                onChange={(e) => setNewTag(e.target.value)}
              />
            </div>
          </Section>
          <Button title="Salvar" onClick={handleCreateNote}></Button>
        </Form>
      </main>
    </ContainerCreateNote>
  );
}
