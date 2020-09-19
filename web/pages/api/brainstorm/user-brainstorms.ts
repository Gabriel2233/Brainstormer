import { NextApiRequest, NextApiResponse } from "next";
import { decryptCookie } from "../../../lib/cookie";
import { prisma } from "../../../lib/prisma";

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

    res.status(200).json({ response });
  } catch (error) {
    return res.status(500).end(error.message);
  }
};
