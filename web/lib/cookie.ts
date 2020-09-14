import Iron from "@hapi/iron";

interface Cookie {
  maxAge: number;
  secure: boolean;
  path: string;
  httpOnly: boolean;
  sameSite: string;
}

export const cookie: Cookie = {
  maxAge: 60 * 60,
  secure: false,
  path: "/",
  httpOnly: true,
  sameSite: "strict",
};

export const decryptCookie = (cookie) => {
  return Iron.unseal(cookie, process.env.ENCRYPTION_SECRET, Iron.defaults);
};

export const encryptCookie = (userMetadata) => {
  return Iron.seal(
    userMetadata,
    process.env.ENCRYPTION_SECRET,
    Iron.defaults
  );
};
