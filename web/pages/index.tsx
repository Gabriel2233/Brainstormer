import Link from "next/link";
import Header from "../components/Header";
import {
  Container,
  MainContentWrapper,
  Heading,
  JoinButton,
  SignInButton,
} from "../styles/HomeStyles";

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
      </MainContentWrapper>
    </Container>
  );
}
