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
import Card from "../components/BrainstormCard";
import SWR from "swr";

const fetcher = async (route: string) => {
  const res = await fetch(route);
  const data = await res.json();

  return data;
};

const Explore: React.FC = () => {
  const { data, error } = SWR("/api/brainstorm/getAll", fetcher);

  if (!data) return <h1>Loading...</h1>;

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
          {[1, 2, 3, 4, 5].map((item) => (
            <Card key={item} />
          ))}
        </CardsContainer>
      </MainContent>
    </Container>
  );
};

export default Explore;
