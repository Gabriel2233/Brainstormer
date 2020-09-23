import React from "react";
import Header from "../components/Header";
import { FiSearch } from "react-icons/fi";
import {
  Container,
  DashboardLink,
  MainContent,
  InputWrapper,
  SearchInput,
  SearchButton,
  CardsContainer,
} from "../styles/ExploreStyles";
import BrainstormCard from "../components/BrainstormCard";
import { Brainstorm } from "./user-dashboard";
import Link from "next/link";
import { GetStaticProps } from "next";
import { prisma } from "../lib/prisma";

import moment from "moment";
import useAuth from "../hooks/useAuth";

interface Props {
  formatedResponse: Brainstorm[];
}

const Explore: React.FC<Props> = ({ formatedResponse }) => {
  const { user } = useAuth();

  if (!user) return <h1>Loading...</h1>;

  return (
    <Container>
      <Header>
        {user.user.email ? (
          <Link href="/user-dashboard">
            <DashboardLink>Dashboard</DashboardLink>
          </Link>
        ) : null}
      </Header>

      <MainContent>
        <CardsContainer>
          {formatedResponse.map((brainstorm: Brainstorm) => (
            <BrainstormCard key={brainstorm.id} brainstormData={brainstorm} />
          ))}
        </CardsContainer>
      </MainContent>
    </Container>
  );
};

export default Explore;

export const getStaticProps: GetStaticProps = async () => {
  let response = await prisma.brainstorm.findMany({
    include: {
      author: true,
      stormPieces: true,
    },
  });

  const formatedResponse = response.map((brt) => {
    return {
      ...brt,
      createdAt: brt.createdAt.toISOString(),
    };
  });

  return {
    props: { formatedResponse },
  };
};
