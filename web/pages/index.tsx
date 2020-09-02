import Header from "../components/Header";

import {
  Container,
  MainContentWrapper,
  Heading,
  JoinButton,
  CardsGroup,
} from "../styles/HomeStyles";

export default function Home() {
  return (
    <Container>
      <Header />

      <MainContentWrapper>
        <Heading>
          Sometimes
          <br /> we just need an idea.
        </Heading>

        <JoinButton>Start Brainstorming</JoinButton>

        <CardsGroup></CardsGroup>
      </MainContentWrapper>
    </Container>
  );
}
