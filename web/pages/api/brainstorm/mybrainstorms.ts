import { NextApiRequest, NextApiResponse } from "next";
import { decryptCookie } from "../../../lib/cookie";
import { prisma } from "../../../lib/prisma";

interface User {
  email: string;
  issuer: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    let userFromCookie = await decryptCookie(req.cookies.auth);

    if (!userFromCookie) {
      throw new Error("An error ocurred");
    }
    const userEmail = userFromCookie.email;

    const response = await prisma.brainstorm.findMany({
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

    const userBrainstorms = JSON.stringify(response);

    res.status(200).json({ userBrainstorms });
  } catch (error) {
    return res.status(401).end("An error ocurred.");
  }
};
