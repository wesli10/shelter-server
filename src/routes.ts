import { FastifyInstance } from "fastify";
import { z } from "zod";
import dayjs from "dayjs";
import { prisma } from "./lib/prisma";

export async function appRoutes(app: FastifyInstance) {
  app.post("/users", async (request) => {
    const createUserBody = z.object({
      name: z.string(),
      email: z.string(),
    });

    const { name, email } = createUserBody.parse(request.body);

    const today = dayjs().startOf("day").toDate();

    await prisma.user.create({
      data: {
        name: name,
        email: email,
      },
    });
  });
}
