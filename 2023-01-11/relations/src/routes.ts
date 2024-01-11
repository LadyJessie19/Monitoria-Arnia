import { Router } from "express";
import { User } from "./entities/User";
import { Address } from "./entities/Address";
import { Task } from "./entities/Task";

const routes = Router();

//Listar todos os usuários
routes.get("/users", async (req, res) => {
  const result = await User.find().populate("address").populate("tasks");
  res.status(200).json(result);
});

//Criar os usuários
routes.post("/users", async (req, res) => {
  const result = await User.create(req.body);
  res.status(201).json(result);
});

// Criar o endereço
routes.post("/users/:user_id/addresses", async (req, res) => {
  const newAddress = req.body;
  const userId = req.params.user_id;

  const result = await Address.create(newAddress);
  const updatedUser = await User.findByIdAndUpdate(
    userId,
    { address: result._id },
    { new: true }
  );

  res.status(201).json({ createdAddress: result, updatedUser });
});

// Criar a tarefa
routes.post("/users/:user_id/tasks", async (req, res) => {
  const newTask = req.body;
  const userId = req.params.user_id;

  const result = await Task.create(newTask);
  const updatedUser = await User.findByIdAndUpdate(
    userId,
    {
      $push: { tasks: result._id },
    },
    { new: true }
  );

  res.status(201).json({ createdTask: result, updatedUser });
});

export { routes };
