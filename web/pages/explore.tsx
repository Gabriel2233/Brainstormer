import React from "react";
import Header from "../components/Header";
import { FiSearch } from "react-icons/fi";
import {
  Container,
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
import { getAllBrainstorms } from "./api/brainstorm/getAll";

interface Props {
  brainstorms: string;
}

const Explore: React.FC<Props> = ({ brainstorms }) => {
  const allBrainstorms: Brainstorm[] = JSON.parse(brainstorms);

  return (
    <Container>
      <Header />

      <MainContent>
        <InputWrapper>
          <SearchInput placeholder="What's on your mind?" />
          <SearchButton>
            <FiSearch size={18} color="var(--main-white)" />
          </SearchButton>
        </InputWrapper>

        <CardsContainer>
          {allBrainstorms.map((brainstorm) => (
            <BrainstormCard key={brainstorm.id} brainstormData={brainstorm} />
          ))}
        </CardsContainer>
      </MainContent>
    </Container>
  );
};

export default Explore;

export const getStaticProps: GetStaticProps = async () => {
  const brainstorms = await getAllBrainstorms();

  return {
    props: { brainstorms },
  };
};
