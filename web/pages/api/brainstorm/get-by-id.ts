import { prisma } from "../../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { decryptCookie } from "../../../lib/cookie";
import { User } from "@prisma/client";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let userFromCookie: User;

  try {
    userFromCookie = await decryptCookie(req.cookies.auth);

    if (!userFromCookie) {
      throw new Error("Cannot find user. Unable to proceed with creation.");
    }

    const brtId = req.query;

    const response = await prisma.brainstorm.findOne({
      where: {
        id: Number(brtId.id),
      },

      include: {
        author: true,
        stormPieces: true,
      },
    });

    return res.status(201).json(response);
  } catch (error) {
    return res.status(500).end(error.message);
  }
};
