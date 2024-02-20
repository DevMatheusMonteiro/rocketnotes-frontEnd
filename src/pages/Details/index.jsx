import { Container, Links, Content } from "./styles";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { useAuthContext } from "../../hooks/authContext";

import Header from "../../components/Header";
import Button from "../../components/Button";
import Section from "../../components/Section";
import Tag from "../../components/Tag";
import ButtonText from "../../components/ButtonText";

export default function Details() {
  const { fetchUsers } = useAuthContext();

  const navigate = useNavigate();

  const [note, setNote] = useState({});

  const { id } = useParams();

  async function handleRemoveNote() {
    try {
      const isSure = confirm("Tem certeza que deseja excluir a nota?");

      if (!isSure) {
        return;
      }

      await api.delete(`/notes/${id}`);
      navigate("/");
    } catch (error) {
      if (error.response) {
        fetchUsers();
      }
    }
  }

  useEffect(() => {
    async function fetchNoteDetails() {
      try {
        const response = await api.get(`/notes/${id}`);

        setNote(response.data);
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
          if (error.response.status === 404) {
            alert(error.response.data.message);
            navigate("/");
          }

          if (error.response.status === 401) {
            fetchUsers();
          }
        }
      }
    }

    fetchNoteDetails();
  }, []);

  return (
    <Container>
      <Header />
      {note && (
        <main>
          <Content>
            <ButtonText title="Excluir Nota" onClick={handleRemoveNote} />

            <h1>{note.title}</h1>

            <p>
              {note.description === null ? "Sem descrição" : note.description}
            </p>

            {note.links && (
              <Section title="Links úteis">
                <Links>
                  {note.links.map((link) => {
                    return (
                      <li key={String(link.id)}>
                        <a href={link.url} target="_blank">
                          {link.url}
                        </a>
                      </li>
                    );
                  })}
                </Links>
              </Section>
            )}
            <Section title="Marcadores">
              {note.tags &&
                note.tags.map((tag) => <Tag key={tag.id} title={tag.name} />)}
            </Section>
            <Button title="Voltar" onClick={() => navigate(-1)} />
          </Content>
        </main>
      )}
    </Container>
  );
}
