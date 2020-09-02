import React from "react";
import { FaBrain } from "react-icons/fa";
import { Container, IconNameGroup } from "./styles";

const Header: React.FC = ({ children }) => {
  return (
    <Container>
      <IconNameGroup>
        <FaBrain size={32} color="var(--main-salmon)" />
        <h2>Brainstormer</h2>
      </IconNameGroup>

      {children}
    </Container>
  );
};

export default Header;
