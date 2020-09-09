import { useState, useEffect, FormEvent } from "react";
import Router from "next/router";
import { FaBrain } from "react-icons/fa";
import {
  Container,
  LoginForm,
  Heading,
  EmailInput,
  SubmitButton,
} from "../styles/LoginStyles";
import { Magic } from "magic-sdk";
import useAuth from "../hooks/useAuth";

const Login: React.FC = () => {
  const { user } = useAuth();
  const [email, setEmail] = useState("");
  const [disableLogin, setDisableLogin] = useState(false);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    setDisableLogin(true);

    const DIDT = await new Magic(
      process.env.NEXT_PUBLIC_MAGIC_PUB_KEY
    ).auth.loginWithMagicLink({ email });

    const authenticateUser = await fetch(`/api/user/login`, {
      method: "POST",
      headers: new Headers({
        Authorization: "Bearer " + DIDT,
      }),
    });

    if (authenticateUser.ok) {
      Router.push("/user-dashboard");
    } else {
      alert("There was an error while logging you in. Pleas try again.");
    }
  };

  return (
    <Container>
      <LoginForm>
        <Heading>
          <FaBrain size={64} color="var(--main-salmon)" />
          <h2>Join Brainstormer</h2>
        </Heading>
        <EmailInput
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <SubmitButton
          cursorType={disableLogin ? "not-allowed" : "pointer"}
          disabled={disableLogin}
          onClick={handleLogin}
        >
          {disableLogin ? "Logging you in..." : "Log In or Sign Up"}
        </SubmitButton>
      </LoginForm>
    </Container>
  );
};

export default Login;
