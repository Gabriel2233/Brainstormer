import { magic } from "../../../lib/magic";
import { encryptCookie, cookie } from "../../../lib/cookie";
import { serialize, CookieSerializeOptions } from "cookie";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

interface User {
  email: string;
  issuer: string;
}

/* save new user to database */
const signup = async (user: User) => {
  let newUser = {
    email: user.email,
    issuer: user.issuer,
  };

  const { email, issuer } = newUser;

  return await prisma.user.create({
    data: {
      email,
      issuer,
    },
  });
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  if (method !== "POST") {
    return res.status(400).json({ message: "Only POST requests are accepted" });
  }

  let DIDT = magic.utils.parseAuthorizationHeader(req.headers.authorization);

  magic.token.validate(DIDT);

  let claim = magic.token.decode(DIDT)[1];

  const userMetadata = await magic.users.getMetadataByIssuer(claim.iss);

  const existingUser = await prisma.user.findOne({
    where: { issuer: claim.iss },
  });

  !existingUser && signup(userMetadata);

  const token = await encryptCookie(userMetadata);

  const c = cookie as CookieSerializeOptions;
  res.setHeader("Set-Cookie", serialize("auth", token, c));

  return res.json({ authorized: true, user: userMetadata });
};
