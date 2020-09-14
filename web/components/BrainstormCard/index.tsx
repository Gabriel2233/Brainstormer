import React from "react";

import {
  Container,
  UserDateWrapper,
  MainWrapper,
  ColaborateButton,
} from "./styles";
import { Brainstorm } from "../../pages/user-dashboard";
import Link from "next/link";

interface Props {
  brainstormData: Brainstorm;
}

const BrainstormCard: React.FC<Props> = ({ brainstormData }) => {
  return (
    <Container>
      <UserDateWrapper>
        <p>{brainstormData.stormPieces.length} collaborations</p>
        <span>6h ago • Active</span>
      </UserDateWrapper>

      <MainWrapper>
        <h3>{brainstormData.title}</h3>
      </MainWrapper>

      <Link href={`brainstorm/${brainstormData.id}`}>
        <div>
          <ColaborateButton>Participate</ColaborateButton>
        </div>
      </Link>
    </Container>
  );
};

export default BrainstormCard;
