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

    const { brainstormId, idea }: BodyPostRequest = JSON.parse(req.body);

    const creatorEmail = userFromCookie.email;

    await prisma.stormPiece.create({
      data: {
        stars: 0,
        idea,
        Brainstorm: {
          connect: { id: parseInt(brainstormId, 10) },
        },
        author: {
          connect: { email: creatorEmail },
        },
      },
    });

    res.status(201).json({ message: "ok" });
  } catch (error) {
    return res.status(500).end(error.message);
  }
};
