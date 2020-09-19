import { NextApiRequest, NextApiResponse } from "next";
import { decryptCookie } from "../../../lib/cookie";
import { prisma } from "../../../lib/prisma";

interface User {
  email: string;
  issuer: string;
}

interface BodyPostRequest {
  brainstormId: string;
  idea: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") res.status(405).end();

  let userFromCookie: User;

  try {
    userFromCookie = await decryptCookie(req.cookies.auth);

    if (!userFromCookie.email) {
      throw new Error("Cannot find user. Unable to proceed with creation.");
    }

    const body: BodyPostRequest = JSON.parse(req.body);

    // const creatorEmail = userFromCookie.email;

    // const userInDb = await prisma.user.findOne({
    //   where: {
    //     email: creatorEmail,
    //   },
    // });

    // await prisma.stormPiece.update({
    //   where: {
    //     id: userInDb.id,
    //   },

    //   data: {
    //     stars,
    //   },
    // });

    res.status(200).json({ body });
  } catch (error) {
    return res.status(500).end(error.message);
  }
};
