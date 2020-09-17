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

    const userEmail = userFromCookie.email;

    const active: boolean = JSON.parse(req.body);

    const userInDb = await prisma.user.findOne({
      where: {
        email: userEmail,
      },
    });

    const response = await prisma.brainstorm.update({
      data: {
        active: !active,
      },

      where: {
        id: userInDb.id,
      },
    });

    const updatedBrainstorm = JSON.stringify(response.active);

    res.status(200).json({ updatedBrainstorm });
  } catch (error) {
    return res.status(401).end("An error ocurred");
  }
};
