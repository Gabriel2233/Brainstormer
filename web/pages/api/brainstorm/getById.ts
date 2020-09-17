import { prisma } from "../../../lib/prisma";

export async function getBrainstormById(id: number) {
  try {
    const response = await prisma.brainstorm.findMany({
      where: {
        id,
      },

      include: {
        author: true,
        stormPieces: true,
      },
    });

    return response;
  } catch (error) {
    return error;
  }
}
