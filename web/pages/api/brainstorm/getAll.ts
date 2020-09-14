import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await prisma.brainstorm.findMany({
      include: {
        author: true,
        stormPieces: true,
      },
    });

    const allBrainstorms = JSON.stringify(response);

    res.status(200).json({ allBrainstorms });
  } catch (error) {
    return res.status(401).end("An error ocurred.");
  }
};
