import { Router } from "express";
import { VisitController } from "../controllers/visitController";

export function createVisitRoutes(controller: VisitController) {
  const router = Router();
  router.post("/", controller.request);
  router.post("/:id/accept", controller.accept);
  return router;
}
