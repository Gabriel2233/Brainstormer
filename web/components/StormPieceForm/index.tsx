import React, { useState, FormEvent } from "react";
import { Container, Wrapper, Input, Form, CreateButton } from "./styles";
import { FiX } from "react-icons/fi";
import { ProtectRoute } from "../../utils/ProtectedRoute";
import { useRouter } from "next/router";

const StormPieceCreation: React.FC = () => {
  const [idea, setIdea] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(true);

  const { query } = useRouter();

  async function collaborate(e: FormEvent) {
    e.preventDefault();

    const requestBody = {
      brainstormId: query.id,
      idea,
    };

    const params: RequestInit = {
      method: "POST",
      body: JSON.stringify(requestBody),
    };

    try {
      const response = await fetch("/api/stormpiece/create", params);

      if (response.ok) {
        alert("Success");
      } else {
        alert("There has been an error. Try again...");
      }
    } catch (err) {
      alert(err);
    }
  }

  return (
    <>
      {showModal && (
        <Container>
          <Wrapper>
            <FiX
              size={22}
              color="var(--main-salmon)"
              style={{ margin: 16, cursor: "pointer" }}
              onClick={() => setShowModal(!showModal)}
            />
            <Form>
              <Input
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                placeholder="Your idea here!"
              />
              <CreateButton onClick={collaborate}>Create</CreateButton>
            </Form>
          </Wrapper>
        </Container>
      )}
    </>
  );
};

export default ProtectRoute(StormPieceCreation);
