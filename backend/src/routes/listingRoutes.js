import { Router } from "express";

export function createListingRoutes(controller) {
  const router = Router();
  router.get("/", controller.list);
  router.post("/", controller.create);
  router.post("/:listingId/boost", controller.boost);
  return router;
}
