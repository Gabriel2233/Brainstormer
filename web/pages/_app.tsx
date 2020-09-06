import GlobalStyles from "../styles/Global";
import Store from "../context/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <Store>
      <Component {...pageProps} />

      <GlobalStyles />
    </Store>
  );
}

export default MyApp;
