import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../context/AuthContext";

export function ProtectRoute(Component) {
  return function () {
    const { loggedIn, isLoading } = useContext(AuthContext);
    const Router = useRouter();

    useEffect(() => {
      if (!loggedIn && !isLoading) Router.push("/");
    }, [loggedIn, isLoading]);

    return <Component {...arguments} />;
  };
}
