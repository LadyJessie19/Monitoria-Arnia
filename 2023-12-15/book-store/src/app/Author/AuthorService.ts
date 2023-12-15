import { CreateAuthorDTO } from "./AuthorDTO";
import { AuthorRepository } from "./AuthorRepository";

export class AuthorService {
  constructor(private repository: AuthorRepository) {}

  // SERVICE - VALIDAÇÕES

  // PONTE ENTRE REPOSITÓRIO E CONTROLLER

  // dados fornecidos são válidos?
  // usuário tem permissão para realizar a operação solicitada?
  // operação solicitada é possível?

  async create(author: CreateAuthorDTO) {
    const authorExists = await this.repository.findByName(author.name);

    if (authorExists) {
      throw new Error("Author already exists");
    }

    const authorEmailExists = await this.repository.findByEmail(author.email);
    console.log(authorEmailExists);

    if (authorEmailExists) {
      throw new Error("Author with this email already exists");
    }

    return await this.repository.create(author);
  }

  async read() {
    return await this.repository.read();
  }
}
