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
import SWR from "swr";
import { Brainstorm } from "./user-dashboard";
import useAuth from "../hooks/useAuth";
import Link from "next/link";

interface Response {
  allBrainstorms: Brainstorm[];
}

const fetcher = async (route: string) => {
  const res = await fetch(route);
  const data = await res.json();

  return data;
};

const Explore: React.FC = () => {
  const { data, error } = SWR<Response>("/api/brainstorm/getAll", fetcher);
  const { user } = useAuth();

  if (!data) return <h1>Loading...</h1>;

  const allBrainstorms = JSON.parse(data.allBrainstorms);

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
          {allBrainstorms.map((brainstorm: Brainstorm) => (
            <BrainstormCard key={brainstorm.id} brainstormData={brainstorm} />
          ))}
        </CardsContainer>
      </MainContent>
    </Container>
  );
};

export default Explore;
