import { Router } from "express";
import { AuthorModule } from "./AuthorModule";

const { controller } = AuthorModule.build();

const AuthorRouter = Router();

AuthorRouter.post("/authors", controller.create.bind(controller));
AuthorRouter.get("/authors", controller.read.bind(controller));

export { AuthorRouter };
