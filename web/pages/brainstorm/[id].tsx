import React, { useState } from "react";
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
import { prisma } from "../../lib/prisma";
import { Brainstorm as IBrainstorm } from "../user-dashboard";
import { FiArrowLeft } from "react-icons/fi";
import { GiBrain } from "react-icons/gi";
import StormPieceCreation from "../../components/StormPieceForm";
import { StormPiece as IStormPiece } from "../user-dashboard";
import StormPiece from "../../components/StormPiece";
import Link from "next/link";

interface Props {
  stringifiedBrainstorm: string;
}

const Brainstorm: React.FC<Props> = ({ stringifiedBrainstorm }) => {
  const { stormPieces, title }: IBrainstorm = JSON.parse(stringifiedBrainstorm);
  const [showCreate, setShowCreate] = useState<boolean>(false);

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
        <CollaborateButton onClick={() => setShowCreate(!showCreate)}>
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
  const res = await prisma.brainstorm.findMany({
    include: {
      stormPieces: true,
    },
  });

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
      stormPieces: true,
    },
  });

  const stringifiedBrainstorm = JSON.stringify(res);

  return {
    props: { stringifiedBrainstorm },
  };
};
