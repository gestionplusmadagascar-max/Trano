import { Router } from "express";
import { ListingController } from "../controllers/listingController";

export function createListingRoutes(controller: ListingController) {
  const router = Router();
  router.get("/", controller.list);
  router.post("/", controller.create);
  router.post("/:listingId/boost", controller.boost);
  return router;
}
