import { NextApiRequest, NextApiResponse } from "next";
import { decryptCookie } from "../../../lib/cookie";
import { prisma } from "../../../lib/prisma";

interface User {
  email: string;
  issuer: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let userFromCookie: User;

  try {
    userFromCookie = await decryptCookie(req.cookies.auth);

    if (!userFromCookie) {
      throw new Error("Cannot find user. Unable to proceed with creation.");
    }

    const userEmail = userFromCookie.email;

    const myBrainstorms = await prisma.brainstorm.findMany({
      where: {
        author: {
          email: userEmail,
        },
      },

      include: {
        author: true,
        stormPieces: true,
      },
    });

    res.status(200).json({ myBrainstorms });
  } catch (error) {
    return res.status(401).json({ authorized: false });
  }
};
