import { useContext, useState, FormEvent, Dispatch } from "react";
import { AuthContext } from "../../context/AuthContext";
import Router from "next/router";
import { FaBrain } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import {
  Container,
  Wrapper,
  LoginForm,
  Heading,
  EmailInput,
  SubmitButton,
} from "./styles";

interface Props {
  setModalActive: Dispatch<boolean>;
  modalActive: boolean;
}

const Login: React.FC<Props> = ({ setModalActive, modalActive }) => {
  const { isLoading, magic, setLoggedIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [disableLogin, setDisableLogin] = useState(false);

  const authenticateWithDb = async (DIDT: string) => {
    let res = await fetch(`/api/user/login`, {
      method: "POST",
      headers: new Headers({
        Authorization: "Bearer " + DIDT,
      }),
    });

    let data = await res.json();
    console.log(data);
    return data.authorized ? data.user : false;
  };

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    setModalActive(!modalActive);

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

  return (
    <Container>
      <Wrapper>
        <LoginForm>
          <FiX
            onClick={() => setModalActive(!modalActive)}
            size={22}
            color="var(--secondary-black)"
            style={{
              cursor: "pointer",
              display: "flex",
              alignSelf: "flex-start",
            }}
          />
          <Heading>
            <FaBrain size={64} color="var(--main-salmon)" />
            <h2>Join Brainstormer</h2>
          </Heading>
          <EmailInput
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <SubmitButton onClick={handleLogin}>Log in</SubmitButton>
        </LoginForm>
      </Wrapper>
    </Container>
  );
};

export default Login;
