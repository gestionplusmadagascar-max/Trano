import express from "express";
import cors from "cors";
import { InMemoryListingRepository } from "./storage/repositories/inMemoryListingRepository.js";
import { InMemoryUserRepository } from "./storage/repositories/inMemoryUserRepository.js";
import { InMemoryVisitRepository } from "./storage/repositories/inMemoryVisitRepository.js";
import { InMemoryPaymentRepository } from "./storage/repositories/inMemoryPaymentRepository.js";
import { ListingService } from "./services/listingService.js";
import { VisitService } from "./services/visitService.js";
import { PaymentService } from "./services/paymentService.js";
import { BoostService } from "./services/boostService.js";
import { ListingController } from "./controllers/listingController.js";
import { VisitController } from "./controllers/visitController.js";
import { PaymentController } from "./controllers/paymentController.js";
import { UserController } from "./controllers/userController.js";
import { createListingRoutes } from "./routes/listingRoutes.js";
import { createVisitRoutes } from "./routes/visitRoutes.js";
import { createPaymentRoutes } from "./routes/paymentRoutes.js";
import { createUserRoutes } from "./routes/userRoutes.js";

export function createApp() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  const listingRepository = new InMemoryListingRepository();
  const userRepository = new InMemoryUserRepository();
  const visitRepository = new InMemoryVisitRepository();
  const paymentRepository = new InMemoryPaymentRepository();

  const listingService = new ListingService(listingRepository);
  const boostService = new BoostService(listingRepository, userRepository);
  const visitService = new VisitService(visitRepository, userRepository);
  const paymentService = new PaymentService(paymentRepository);

  const listingController = new ListingController(listingService, boostService);
  const visitController = new VisitController(visitService);
  const paymentController = new PaymentController(paymentService);
  const userController = new UserController(userRepository);

  app.get("/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  app.use("/api/listings", createListingRoutes(listingController));
  app.use("/api/visits", createVisitRoutes(visitController));
  app.use("/api/payments", createPaymentRoutes(paymentController));
  app.use("/api/users", createUserRoutes(userController));

  return app;
}
