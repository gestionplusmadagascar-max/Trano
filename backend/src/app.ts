import express from "express";
import cors from "cors";
import { InMemoryListingRepository } from "./storage/repositories/inMemoryListingRepository";
import { InMemoryUserRepository } from "./storage/repositories/inMemoryUserRepository";
import { InMemoryVisitRepository } from "./storage/repositories/inMemoryVisitRepository";
import { InMemoryPaymentRepository } from "./storage/repositories/inMemoryPaymentRepository";
import { ListingService } from "./services/listingService";
import { VisitService } from "./services/visitService";
import { PaymentService } from "./services/paymentService";
import { BoostService } from "./services/boostService";
import { ListingController } from "./controllers/listingController";
import { VisitController } from "./controllers/visitController";
import { PaymentController } from "./controllers/paymentController";
import { UserController } from "./controllers/userController";
import { createListingRoutes } from "./routes/listingRoutes";
import { createVisitRoutes } from "./routes/visitRoutes";
import { createPaymentRoutes } from "./routes/paymentRoutes";
import { createUserRoutes } from "./routes/userRoutes";

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

  app.get("/health", (_, res) => {
    res.json({ status: "ok" });
  });

  app.use("/api/listings", createListingRoutes(listingController));
  app.use("/api/visits", createVisitRoutes(visitController));
  app.use("/api/payments", createPaymentRoutes(paymentController));
  app.use("/api/users", createUserRoutes(userController));

  return app;
}
