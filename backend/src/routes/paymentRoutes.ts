import { Router } from "express";
import { PaymentController } from "../controllers/paymentController";

export function createPaymentRoutes(controller: PaymentController) {
  const router = Router();
  router.get("/", controller.list);
  router.post("/", controller.create);
  return router;
}
