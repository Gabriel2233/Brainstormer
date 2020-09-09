import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

interface User {
  email: string;
  issuer: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {

  try {

    const allBrainstorms = await prisma.brainstorm.findMany({
      include: {
        author: true,
        stormPieces: true,
      },
    });

    res.status(200).json({ allBrainstorms });
  } catch (error) {
    return res.status(401).json({ authorized: false });
  }
};
