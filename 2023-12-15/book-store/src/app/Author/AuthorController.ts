import { Request, Response } from "express";
import { AuthorFactory } from "./AuthorFactory";
import { AuthorService } from "./AuthorService";

export class AuthorController {
  constructor(private service: AuthorService) {}

  //CONTROLLER - CONTATO COM AS REQUISIÇOES DO CLIENTE
  //RECEBE A REQUISIÇÃO DO CLIENTE e RETORNA UM RESPONSE

  async create(req: Request, res: Response) {
    const { body } = req;

    const factory = new AuthorFactory();
    const newAuthor = factory.newAuthor(body);

    try {
      const result = await this.service.create(newAuthor);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }

    // const result = await this.service.create(body);
  }

  async read(req: Request, res: Response) {
    const authors = await this.service.read();
    return res.status(200).json(authors);
  }
}
