import { Author } from "./Author";
import { AuthorController } from "./AuthorController";
import { AuthorRepository } from "./AuthorRepository";
import { AuthorService } from "./AuthorService";

export class AuthorModule {
  static build() {
    const repository = new AuthorRepository(Author);
    const service = new AuthorService(repository);
    const controller = new AuthorController(service);
    return { controller };
  }
}
