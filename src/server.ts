import fastify from "fastify";
import cors from "@fastify/cors";
import { appRoutes } from "./routes";

const app = fastify();

app.register(cors);
app.register(appRoutes);

app
  .listen({
    port: 5656,
  })
  .then(() => {
    console.log("HTTP Server Running");
  });
