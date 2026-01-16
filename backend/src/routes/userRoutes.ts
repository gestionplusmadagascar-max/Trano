import { Router } from "express";
import { UserController } from "../controllers/userController";

export function createUserRoutes(controller: UserController) {
  const router = Router();
  router.get("/", controller.list);
  return router;
}
