import React, { useContext } from "react";
import { AuthContext } from '../../context/AuthContext'
import { Container } from "./styles";

const UserInfoModal: React.FC = () => {

  const {loggedIn} = useContext(AuthContext)

  return (
    <Container>
      <p>{loggedIn}</p>
      <hr />
      <button>Log Out</button>
    </Container>
  );
};

export default UserInfoModal;
