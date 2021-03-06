import { NextApiRequest, NextApiResponse } from "next";
import { decryptCookie } from "../../../lib/cookie";
import { prisma } from "../../../lib/prisma";

interface User {
  email: string;
  issuer: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "PUT") return res.status(405).end;

  let userFromCookie: User;

  try {
    userFromCookie = await decryptCookie(req.cookies.auth);

    if (!userFromCookie.email) {
      throw new Error("Cannot find user. Unable to proceed with creation.");
    }

    const body = JSON.parse(req.body);

    const response = await prisma.brainstorm.update({
      data: {
        active: body.active,
      },

      where: {
        id: body.brtId,
      },
    });

    await prisma.$disconnect();

    res.status(201).json({ response });
  } catch (error) {
    return res.status(500).end(error.message);
  }
};
