import React from "react";
import { Container } from "./styles";
import useAuth from "../../hooks/useAuth";

const UserInfoModal: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container>
      <p>{user.user.email}</p>
      <hr />
      <button>Log Out</button>
    </Container>
  );
};

export default UserInfoModal;
