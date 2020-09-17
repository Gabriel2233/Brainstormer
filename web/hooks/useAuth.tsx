import SWR from "swr";

interface User {
  user: {
    issuer: string;
    email: string;
  };
}

export async function fetcher(route: string) {
  const response = await fetch(route);
  const user = await response.json();

  return user || null;
}

export default function useAuth() {
  const { data: user, error } = SWR<User>("/api/user", fetcher);
  const loading = user === undefined;

  return {
    user,
    error,
    loading,
  };
}
