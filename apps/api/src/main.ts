import express from 'express';
import { PrismaClient } from '@prisma/client'
import { UserCreateOneSchema } from "@/prisma/generated/schemas";

const prisma = new PrismaClient();
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/greetings/:name', (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

app.get("/api/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.post("/api/users", async (req, res) => {
  const { data } = UserCreateOneSchema.parse(req.body);
  const newUser = await prisma.user.create({ data });
  res.json(newUser);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});