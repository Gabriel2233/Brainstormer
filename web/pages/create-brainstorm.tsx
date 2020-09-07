import React, { useState, FormEvent } from "react";
import {
  Container,
  FlexContainer,
  Heading,
  CreateContainer,
  Group,
  IdeaInput,
  CreateButton,
} from "../styles/CreateBrainstormStyles";
import Header from "../components/Header";
import { ProtectRoute } from "../utils/ProtectedRoute";
import { FcIdea } from "react-icons/fc";

const Creation: React.FC = () => {
  const [idea, setIdea] = useState<string>("");

  return (
    <Container>
      <Header />

      <FlexContainer>
        <Heading>
          <h4>
            You want some ideas? <br /> That's the best place <br />
            you could be.
          </h4>
          <p>A new idea, great! Just type in. Your doubts will be sufficed. </p>
        </Heading>

        <CreateContainer>
          <FcIdea size={72} />
          <Group>
            <IdeaInput
              placeholder="Your idea"
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
            />
            <CreateButton>Create!</CreateButton>
          </Group>
        </CreateContainer>
      </FlexContainer>
    </Container>
  );
};

export default ProtectRoute(Creation);
