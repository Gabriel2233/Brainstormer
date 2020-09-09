import Iron from "@hapi/iron";

interface Cookie {
  maxAge: number;
  secure: boolean;
  path: string;
  httpOnly: boolean;
  sameSite: string;
}

interface Metadata {
  authorized: boolean;
  user: {
    email: string;
    issuer: string;
  };
}

export const cookie: Cookie = {
  maxAge: 60 * 60,
  secure: false,
  path: "/",
  httpOnly: true,
  sameSite: "strict",
};

export const decryptCookie = async (cookie: string) => {
  return await Iron.unseal(
    cookie,
    process.env.ENCRYPTION_SECRET,
    Iron.defaults
  );
};

export const encryptCookie = async (userMetadata) => {
  return await Iron.seal(
    userMetadata,
    process.env.ENCRYPTION_SECRET,
    Iron.defaults
  );
};
