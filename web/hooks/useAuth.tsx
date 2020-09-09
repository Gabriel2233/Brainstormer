import SWR from "swr";

interface User {
  issuer: string;
  email: string;
}

export async function fetcher(route: string) {
  const response = await fetch(route);
  const user: User = await response.json();

  return user || null;
}

export default function useAuth() {
  const { data: user, error } = SWR("/api/user", fetcher);
  const loading = user === undefined;

  return {
    user,
    error,
    loading,
  };
}
