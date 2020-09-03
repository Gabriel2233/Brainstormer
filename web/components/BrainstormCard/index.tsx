import React from "react";

import {
  Container,
  UserDateWrapper,
  MainWrapper,
  ColaborateButton,
} from "./styles";

const BrainstormCard: React.FC = () => {
  return (
    <Container>
      <UserDateWrapper>
        <p>SuperUser123</p>
        <span>6h ago • Active</span>
      </UserDateWrapper>

      <MainWrapper>
        <h3>Cookign recipes</h3>
      </MainWrapper>

      <ColaborateButton>Participate</ColaborateButton>
    </Container>
  );
};

export default BrainstormCard;
