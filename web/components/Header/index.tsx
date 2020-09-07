import React from "react";
import { GiBrain } from "react-icons/gi";
import { Container, IconNameGroup } from "./styles";
import Link from "next/link";

const Header: React.FC = ({ children }) => {
  return (
    <Container>
      <IconNameGroup>
        <GiBrain size={32} color="var(--main-salmon)" />
        <Link href="/">
          <h2>Brainstormer</h2>
        </Link>
      </IconNameGroup>

      {children}
    </Container>
  );
};

export default Header;
