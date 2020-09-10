import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { Container } from "../../styles/BrainstormStyles";
import { prisma } from "../../lib/prisma";
import { Brainstorm as IBrainstorm } from "../user-dashboard";

interface Props {
  stringifiedBrainstorm: string;
}

const Brainstorm: React.FC<Props> = ({ stringifiedBrainstorm }) => {
  const parsedBrainstorm: IBrainstorm = JSON.parse(stringifiedBrainstorm);

  return (
    <Container>
      <h1>I'm a brainstorm</h1>
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
