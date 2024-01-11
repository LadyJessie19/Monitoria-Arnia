import express from "express";
import connectDB from "./db";
import { routes } from "./routes";
const app = express();

//Iniciando a conexão com o banco de dados
connectDB();

//Habilitado o JSON
app.use(express.json());

//Mapeamento das rotas
app.use(routes);

const PORT = process.env.PORT || 3000;

//Iniciando o servidor na PORT
app.listen(PORT, () => {
  console.log(`Servidor Express rodando na porta ${PORT}`);
});
