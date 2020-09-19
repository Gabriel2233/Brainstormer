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
import { prisma } from "../../lib/prisma";

interface Props {
  formatedRespose: IBrainstorm;
}

const Brainstorm: React.FC<Props> = ({ formatedRespose }) => {
  const { author, stormPieces, title } = formatedRespose;
  const [showCreate, setShowCreate] = useState<boolean>(false);
  const { user } = useAuth();

  if (!user && !formatedRespose) {
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
          <Link href="/explore">
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
  const res = await prisma.brainstorm.findMany();

  const paths = res.map((brt) => `/brainstorm/${brt.id}`);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await prisma.brainstorm.findOne({
    where: {
      id: Number(params.id),
    },

    include: {
      author: true,
      stormPieces: true,
    },
  });

  const formatedRespose = {
    ...res,
    createdAt: res.createdAt.toISOString(),
  };

  return {
    props: { formatedRespose },
  };
};
