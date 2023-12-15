import { CreateAuthorDTO } from "./AuthorDTO";

interface AuthorBody {
  name: string;
  age: number;
  isActive: boolean;
  email: string;
}

export class AuthorFactory {
  newAuthor(body: AuthorBody): CreateAuthorDTO {
    return {
      name: body.name,
      age: body.age,
      isActive: body.isActive,
      email: body.email,
    };
  }
}
