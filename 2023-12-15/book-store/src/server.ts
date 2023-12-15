import express from "express";
import { connectDatabase } from "./config/database";
import { AuthorRouter } from "./app/Author/AuthorRouter";

const app = express();

app.use(express.json());

//[⬇] ADIÇÃO DO ROTEADOR DA ENTIDADE AUTHOR
app.use(AuthorRouter);

//[⬇] INICIALIZAÇÃO DO SERVIDOR
app.listen(3434, () => {
  console.log("Server running on port 3434");
});

//[⬇] CONEXÃO COM O BANCO DE DADOS
connectDatabase();
