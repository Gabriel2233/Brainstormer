import { createContext, useState, useEffect, Dispatch } from "react";
import { Magic } from "magic-sdk";

interface AuthContext {
  loggedIn: boolean;
  setLoggedIn: Dispatch<boolean>;
  magic: Magic;
  isLoading: boolean;
}

/* initializing context API values */
export const AuthContext = createContext({} as AuthContext);

/* this function wraps our entire app within our context APIs so they all have access to their values */
const Store = ({ children }) => {
  const [magic, setMagic] = useState<Magic>();
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      /* We initialize Magic in `useEffect` so it has access to the global `window` object inside the browser */
      let m = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUB_KEY);
      setMagic(m);

      /* On page refresh, send a request to /api/user to see if there's a valid user session */
      let res = await fetch(`http://localhost:3000/api/user`);
      let data = await res.json();

      /* If the user has a valid session with our server, it will return {authorized: true, user: user} */
      let loggedIn = data.authorized ? data.user : false;

      /* If db returns {authorized: false}, there is no valid session, so log user out of their session with Magic if it exists */
      !loggedIn && magic && magic.user.logout();

      setLoggedIn(loggedIn.email);
      setIsLoading(false);
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn, magic, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default Store;
