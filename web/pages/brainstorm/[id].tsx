import React, { useState } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import {
  Container,
  Header,
  HeaderText,
  MainContent,
  Group,
  CreateButton,
  StormPiecesGrid,
} from "../../styles/BrainstormStyles";
import { prisma } from "../../lib/prisma";
import { Brainstorm as IBrainstorm } from "../user-dashboard";
import { FiArrowLeft } from "react-icons/fi";
import { GiBrain } from "react-icons/gi";
import StormPieceCreation from "../../components/StormPieceCreation";
import { StormPiece as IStormPiece } from "@prisma/client";
import StormPiece from "../../components/StormPiece";

interface Props {
  stringifiedBrainstorm: string;
}

const Brainstorm: React.FC<Props> = ({ stringifiedBrainstorm }) => {
  const parsedBrainstorm: IBrainstorm = JSON.parse(stringifiedBrainstorm);

  const [create, setCreate] = useState<boolean>(false);

  return (
    <Container>
      <Header>
        <Group>
          <FiArrowLeft
            color="var(--main-salmon)"
            size={24}
            style={{ margin: 26, display: "flex", alignSelf: "flex-start" }}
          />
          <HeaderText>Brainstorm on {parsedBrainstorm.title}</HeaderText>
        </Group>
        <CreateButton onClick={() => setCreate(!create)}>
          <GiBrain size={24} />
          {`  `}
          <p>Collaborate!</p>
        </CreateButton>
      </Header>

      <MainContent>
        <h2>Collaborations: 33</h2>

        <StormPiecesGrid>
          {parsedBrainstorm.stormPieces.map((stormPiece: IStormPiece) => {
            <StormPiece key={stormPiece.id} data={stormPiece} />;
          })}
        </StormPiecesGrid>
      </MainContent>

      {create && <StormPieceCreation create={create} setCreate={setCreate} />}
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
