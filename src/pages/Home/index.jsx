import { FiPlus } from "react-icons/fi";

import { ContainerHome, Brand, Menu, Search, Content, NewNote } from "./styles";

import Header from "../../components/Header";
import ButtonText from "../../components/ButtonText";
import Input from "../../components/Input";
import Section from "../../components/Section";
import Note from "../../components/Note";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../services/api";
import { useAuthContext } from "../../hooks/authContext";

export default function Home() {
  const { fetchUsers } = useAuthContext();

  const navigate = useNavigate();

  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

  function handleSelectedTag(tagName) {
    if (tagName === "all") {
      return setTagsSelected([]);
    }

    const alreadyActive = tagsSelected.includes(tagName);

    if (alreadyActive) {
      const filteredTags = tagsSelected.filter(
        (tagSelected) => tagSelected !== tagName
      );

      setTagsSelected(filteredTags);
    } else {
      setTagsSelected((prevState) => [...prevState, tagName]);
    }
  }

  useEffect(() => {
    async function fetchTags() {
      try {
        const response = await api.get("/tags");

        setTags(response.data);
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
        }
      }
    }

    fetchTags();
  }, []);

  useEffect(() => {
    async function fetchNotes() {
      try {
        const response = await api.get(
          `/notes?title=${search}&tags=${tagsSelected}`
        );

        setNotes(response.data);
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
        }
      }
    }

    fetchUsers();
    fetchNotes();
  }, [search, tagsSelected]);

  return (
    <ContainerHome>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText
            title="Todos"
            isactive={tagsSelected.length === 0}
            onClick={() => handleSelectedTag("all")}
          />
        </li>
        {tags &&
          tags.map((tag) => (
            <li key={String(tag.id)}>
              <ButtonText
                title={tag.name}
                onClick={() => handleSelectedTag(tag.name)}
                isactive={tagsSelected.includes(tag.name)}
              />
            </li>
          ))}
      </Menu>

      <Search>
        <Input
          placeholder="Pesquisar pelo título"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Search>

      <Content>
        <Section title="Minhas Notas">
          {notes &&
            notes.map((note) => (
              <Note
                onClick={() => navigate(`/details/${note.id}`)}
                key={String(note.id)}
                data={note}
              />
            ))}
        </Section>
      </Content>

      <NewNote to="/createnote">
        <FiPlus />
        <span>Criar nota</span>
      </NewNote>
    </ContainerHome>
  );
}
