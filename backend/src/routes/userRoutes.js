import { Router } from "express";

export function createUserRoutes(controller) {
  const router = Router();
  router.get("/", controller.list);
  return router;
}
