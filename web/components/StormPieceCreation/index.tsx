import React, { useState, Dispatch, FormEvent } from "react";
import { Container, Wrapper, Input, Form, CreateButton } from "./styles";
import { FiX } from "react-icons/fi";

import { useRouter } from "next/router";

interface Props {
  create: boolean;
  setCreate: Dispatch<boolean>;
}

const StormPieceCreation: React.FC<Props> = ({ create, setCreate }) => {
  const [idea, setIdea] = useState<string>("");

  const { query } = useRouter();

  async function collaborate(e: FormEvent) {
    e.preventDefault();

    const data = {
      braninstormId: query.id,
      idea,
    };

    try {
      const response = await fetch("/api/stormpiece/create", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Success");
      } else {
        alert("An error ocurred. Please try again.");
      }

      setCreate(!create);
    } catch (err) {
      alert(err);
    }
  }

  return (
    <Container>
      <Wrapper>
        <FiX
          size={22}
          color="var(--main-salmon)"
          style={{ margin: 16, cursor: "pointer" }}
          onClick={() => setCreate(!create)}
        />
        <Form>
          <Input
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="Your idea here!"
          />
          <CreateButton>Create</CreateButton>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default StormPieceCreation;
