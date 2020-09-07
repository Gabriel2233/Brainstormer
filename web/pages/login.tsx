import { useContext, useState, useEffect, FormEvent } from "react";
import { AuthContext } from "../context/AuthContext";
import Router from "next/router";
import { FaBrain } from "react-icons/fa";
import {
  Container,
  LoginForm,
  Heading,
  EmailInput,
  SubmitButton,
} from "../styles/LoginStyles";

const Login: React.FC = () => {
  const { isLoading, magic, setLoggedIn, loggedIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [disableLogin, setDisableLogin] = useState(false);

  const authenticateWithDb = async (DIDT: string) => {
    let res = await fetch(`/api/user/login`, {
      method: "POST",
      headers: new Headers({
        Authorization: "Bearer " + DIDT,
      }),
    });

    let data = await res.json();
    return data.authorized ? data.user : false;
  };

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    try {
      setDisableLogin(true);

      const DIDT = await magic.auth.loginWithMagicLink({ email });

      let user = await authenticateWithDb(DIDT);

      if (user) {
        setLoggedIn(user.email);
        Router.push("/user-dashboard");
      }
    } catch (err) {
      setDisableLogin(false);

      console.log(`Error logging in with Magic, ${err}`);
    }
  };

  useEffect(() => {
    if (loggedIn) {
      Router.push("/user-dashboard");
    }
  }, [loggedIn]);

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
