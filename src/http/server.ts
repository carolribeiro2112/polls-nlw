import fastify from "fastify";
import { prisma } from "../lib/prima";
import { z } from "zod";

const app = fastify();

app.post('/polls', async (request, reply) => {
  const createPollBody = z.object({
    title: z.string()
  });

  const { title } = createPollBody.parse(request.body);

  const poll = await prisma.poll.create({
    data: {
      title,
    }
  });

  return reply.status(201).send({ pollId: poll.id }) 
})

app.listen({port: 3333}).then(() => {
  console.log('HTTP server running!')
})