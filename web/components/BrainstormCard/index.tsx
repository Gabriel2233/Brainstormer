import React from "react";
import {
  Container,
  UserDateWrapper,
  MainWrapper,
  ColaborateButton,
} from "./styles";
import { Brainstorm } from "../../pages/user-dashboard";
import Link from "next/link";
import useFormatDate from "../../hooks/useFormatDate";

interface Props {
  brainstormData: Brainstorm;
}

const BrainstormCard: React.FC<Props> = ({ brainstormData }) => {
  const formatedDate = useFormatDate(
    (brainstormData.createdAt as unknown) as string
  );

  console.log(brainstormData.active);

  return (
    <Container>
      <UserDateWrapper>
        <p>{brainstormData.stormPieces.length} collaborations</p>
        <span>
          {formatedDate} • {brainstormData.active ? "Active" : "Unactive"}
        </span>
      </UserDateWrapper>

      <MainWrapper>
        <h3>{brainstormData.title}</h3>
      </MainWrapper>

      <Link
        href={
          brainstormData.active ? `brainstorm/${brainstormData.id}` : "/explore"
        }
      >
        <ColaborateButton>Participate</ColaborateButton>
      </Link>
    </Container>
  );
};

export default BrainstormCard;
