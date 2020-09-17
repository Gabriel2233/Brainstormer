import React, { useState, FormEvent } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import {
  Container,
  Header,
  HeaderText,
  MainContent,
  Group,
  CollaborateButton,
  StormPiecesGrid,
} from "../../styles/BrainstormStyles";
import { Brainstorm as IBrainstorm } from "../user-dashboard";
import { FiArrowLeft } from "react-icons/fi";
import { GiBrain } from "react-icons/gi";
import StormPieceCreation from "../../components/StormPieceForm";
import { StormPiece as IStormPiece } from "../user-dashboard";
import StormPiece from "../../components/StormPiece";
import Link from "next/link";
import useAuth from "../../hooks/useAuth";
import { getAllBrainstorms } from "../api/brainstorm/getAll";
import { getBrainstormById } from "../api/brainstorm/getById";

interface Props {
  brainstorm: string;
}

const Brainstorm: React.FC<Props> = ({ brainstorm }) => {
  const { stormPieces, title, author }: IBrainstorm = JSON.parse(brainstorm);
  const [showCreate, setShowCreate] = useState<boolean>(false);
  const { user } = useAuth();

  if (!user && !author) {
    return <h1>Loading...</h1>;
  }

  function handleCollaboration(e: FormEvent) {
    e.preventDefault();

    if (user.user.email === author.email) {
      alert("You cannot collaborate on your own Brainstorms!");
    } else {
      setShowCreate(true);
    }
  }

  return (
    <Container>
      <Header>
        <Group>
          <Link href="/user-dashboard">
            <div>
              <FiArrowLeft
                color="var(--main-salmon)"
                size={24}
                style={{
                  margin: 26,
                  display: "flex",
                  cursor: "pointer",
                  alignSelf: "flex-start",
                }}
              />
            </div>
          </Link>
          <HeaderText>Brainstorm on {title}</HeaderText>
        </Group>
        <CollaborateButton onClick={handleCollaboration}>
          <GiBrain size={24} />
          {`  `}
          <p>Collaborate!</p>
        </CollaborateButton>
      </Header>

      <MainContent>
        <h2>Collaborations: {stormPieces.length}</h2>
      </MainContent>

      <StormPiecesGrid>
        {stormPieces.map((stormPiece: IStormPiece) => (
          <StormPiece key={stormPiece.id} data={stormPiece} />
        ))}
      </StormPiecesGrid>

      {showCreate && <StormPieceCreation />}
    </Container>
  );
};

export default Brainstorm;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await getAllBrainstorms();

  const data: IBrainstorm[] = JSON.parse(res);

  const paths = data.map((brt) => `/brainstorm/${brt.id}`);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const brtId = Number(params.id);

  const res = await getBrainstormById(brtId);

  const brainstorm = JSON.stringify(res[0]);

  return {
    props: { brainstorm },
  };
};
