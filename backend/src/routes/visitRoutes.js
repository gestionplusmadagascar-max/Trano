import { Router } from "express";

export function createVisitRoutes(controller) {
  const router = Router();
  router.post("/", controller.request);
  router.post("/:id/accept", controller.accept);
  return router;
}
