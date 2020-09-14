import React, { FormEvent } from "react";
import { Container } from "./styles";
import useAuth from "../../hooks/useAuth";

const UserInfoModal: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container>
      <p>{JSON.stringify(user)}</p>
      <hr />
      <button>Log Out</button>
    </Container>
  );
};

export default UserInfoModal;
