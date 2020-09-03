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

const Explore: React.FC = () => {
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
            <Card />
          ))}
        </CardsContainer>
      </MainContent>
    </Container>
  );
};

export default Explore;
