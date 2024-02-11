import fastify from "fastify";
import { prisma } from "../lib/prima";
import { z } from "zod";
import { createPoll } from "./routes/create-poll";

const app = fastify();

app.register(createPoll)

app.listen({port: 3333}).then(() => {
  console.log('HTTP server running!')
})