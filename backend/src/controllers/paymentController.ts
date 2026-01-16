import { Request, Response } from "express";
import { PaymentService } from "../services/paymentService";

export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  list = async (_: Request, res: Response) => {
    const payments = await this.paymentService.list();
    res.json(payments);
  };

  create = async (req: Request, res: Response) => {
    try {
      const payment = await this.paymentService.create(req.body);
      res.status(201).json(payment);
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  };
}
