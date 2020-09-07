import Link from "next/link";
import Header from "../components/Header";
import { FaQuestion, FaBook, FaHandsHelping } from "react-icons/fa";
import {
  Container,
  MainContentWrapper,
  Heading,
  JoinButton,
  CardsGroup,
  SignInButton,
} from "../styles/HomeStyles";
import Card from "../components/HomeCard";

export default function Home() {
  return (
    <Container>
      <Header>
        <Link href="/login">
          <SignInButton>Log In</SignInButton>
        </Link>
      </Header>

      <MainContentWrapper>
        <Heading>
          Sometimes
          <br /> we just need an idea
          <span style={{ color: "var(--main-salmon)" }}>.</span>
        </Heading>

        <Link href="/login">
          <JoinButton>Start Brainstorming</JoinButton>
        </Link>

        <CardsGroup>
          <Card
            cardTitle="Get Ideas"
            cardContent="Starting a Brainstorm will help you with this problem."
          >
            <FaQuestion id="icon" size={32} />
          </Card>

          <Card
            cardTitle="Learn in the process"
            cardContent="Collaborating in other people's brainstorms make you smarter."
          >
            <FaBook id="icon" size={32} />
          </Card>

          <Card
            cardTitle="We all evolve!"
            cardContent="There you have it! Knowledgement is spread to everyone!."
          >
            <FaHandsHelping id="icon" size={32} />
          </Card>
        </CardsGroup>
      </MainContentWrapper>
    </Container>
  );
}
