import { NextApiRequest, NextApiResponse } from "next";
import { decryptCookie } from "../../../lib/cookie";
import { prisma } from "../../../lib/prisma";
import { StormPieceCreateManyWithoutBrainstormInput } from "@prisma/client";

interface User {
  email: string;
  issuer: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") res.status(405).end();

  let userFromCookie: User;

  try {
    userFromCookie = await decryptCookie(req.cookies.auth);

    if (!userFromCookie) {
      throw new Error("Cannot find user. Unable to proceed with creation.");
    }

    const idea: string = req.body;

    const creatorEmail = userFromCookie.email;

    const newBrainstorm = await prisma.brainstorm.create({
      data: {
        likes: 0,
        stormPieces: [] as StormPieceCreateManyWithoutBrainstormInput,
        title: idea,
        active: true,
        author: {
          connect: { email: creatorEmail },
        },
      },
    });

    res.status(200).json({ newBrainstorm });
  } catch (error) {
    return res.status(401).json({ authorized: false, error });
  }
};
