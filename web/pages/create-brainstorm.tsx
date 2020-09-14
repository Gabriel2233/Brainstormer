import React, { useState, FormEvent } from "react";
import {
  Container,
  CreateContainer,
  Group,
  IdeaInput,
  CreateButton,
} from "../styles/CreateBrainstormStyles";
import Header from "../components/Header";
import { ProtectRoute } from "../utils/ProtectedRoute";
import { FcIdea } from "react-icons/fc";
import Router from "next/router";
import { FiX } from "react-icons/fi";
import Link from "next/link";

const Creation: React.FC = () => {
  const [idea, setIdea] = useState<string>("");

  async function createBrainstorm(e: FormEvent) {
    try {
      const response = await fetch(
        "http://localhost:3000/api/brainstorm/create",
        {
          method: "POST",
          body: idea,
        }
      );

      if (response.ok) {
        alert("Your brainstorm was succesfully created!");

        Router.push("/user-dashboard");
      }
    } catch (err) {
      alert(err);
    }
  }

  return (
    <Container>
      <Link href="/user-dashboard">
        <div>
          <FiX size={24} color="var(--main-salmon)" />
        </div>
      </Link>

      <CreateContainer>
        <FcIdea size={72} />
        <h1>Create a Brainstorm</h1>
        <Group>
          <IdeaInput
            placeholder="Brainstorm title"
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
          />
          <CreateButton onClick={createBrainstorm}>Create!</CreateButton>
        </Group>
      </CreateContainer>
    </Container>
  );
};

export default ProtectRoute(Creation);
