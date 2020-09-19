import { NextApiRequest, NextApiResponse } from "next";
import { decryptCookie } from "../../../lib/cookie";
import { prisma } from "../../../lib/prisma";
import { StormPieceCreateManyWithoutBrainstormInput } from "@prisma/client";
import { User } from "@prisma/client";

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

    await prisma.brainstorm.create({
      data: {
        stormPieces: [] as StormPieceCreateManyWithoutBrainstormInput,
        title: idea,
        active: true,
        author: {
          connect: { email: creatorEmail },
        },
      },
    });

    res.status(201).json({ message: "Success" });
  } catch (error) {
    return res.status(500).end(error.message);
  }
};
