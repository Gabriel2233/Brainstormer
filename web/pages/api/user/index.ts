import { decryptCookie } from "../../../lib/cookie";
import { NextApiRequest, NextApiResponse } from "next";

interface UserFromCookie {
  issuer: string;
  publicAddress: string;
  email: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  if (method !== "GET") {
    return res
      .status(400)
      .json({ message: "This route only accepts GET requests" });
  }

  let userFromCookie: UserFromCookie;

  try {
    userFromCookie = await decryptCookie(req.cookies.auth);
  } catch (error) {
    return res.json({ authorized: false, error });
  }

  return res.json({ authorized: true, user: userFromCookie });
};
