import { prisma } from "../../../lib/prisma";

export async function getAllBrainstorms() {
  try {
    const response = await prisma.brainstorm.findMany({
      include: {
        author: true,
        stormPieces: true,
      },
    });

    return JSON.stringify(response);
  } catch (error) {
    return error;
  }
}
