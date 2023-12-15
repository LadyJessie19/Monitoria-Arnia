import { Author } from "./Author";
import { CreateAuthorDTO } from "./AuthorDTO";

export class AuthorRepository {
  constructor(private model: typeof Author) {}

  // REPOSITORY - CONTATO COM O BANCO
  // CRUD Operations

  async create(author: CreateAuthorDTO) {
    const newAuthor = await this.model.create(author);
    try {
      if (newAuthor) {
        return newAuthor;
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async findByName(name: string) {
    const author = await this.model.findOne({ name });
    try {
      if (author) {
        return author;
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async findByEmail(email: string) {
    const result = this.model.findOne({ email });
    return result;
    // try {
    //   if (result) {
    //     return result;
    //   }
    // } catch (error) {
    //   throw new Error(error);
    // }
  }

  async read() {
    const authors = await this.model.find();
    try {
      if (authors) {
        return authors;
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}
