import { NextApiRequest, NextApiResponse } from "next";
import { decryptCookie } from "../../../lib/cookie";
import { prisma } from "../../../lib/prisma";

interface User {
  email: string;
  issuer: string;
}

interface UserFromCookie {
  authorized: boolean;
  user: User;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let userFromCookie: UserFromCookie;

  try {
    userFromCookie = await decryptCookie(req.cookies.auth);
  } catch (error) {
    return res.status(401).json({ authorized: false, error });
  }

  if (req.method === "GET") {
    try {
      const user = await prisma.user.findOne({
        where: { issuer: userFromCookie.user.issuer },
        include: { Brainstorm: true },
      });

      return res.json({ authorized: true, user });
    } catch (err) {
      return res.json({ authorized: false, err });
    }
  }

  if (req.method === "POST") {
    // try {
    //   const author: User = await prisma.user.findOne({
    //     where: { issuer: userFromCookie.user.issuer },
    //   });
    //   const newBrainstorm = await prisma.brainstorm.create({
    //     data: {
    //       title: req.body,
    //       author,
    //     }
    //   })
    // } catch(err) {
    //   console.log(err)
    // }
  }
};
