import { PaymentRepository } from "../repositories/paymentRepository";
import { PaymentRequest } from "../models/payment";

export interface PaymentPayload {
  userId: string;
  amountAr: number;
  senderNumber: string;
  sentAt: string;
}

export class PaymentService {
  constructor(private readonly repository: PaymentRepository) {}

  async list() {
    return this.repository.list();
  }

  async create(payload: PaymentPayload): Promise<PaymentRequest> {
    const request: PaymentRequest = {
      id: `pay-${Date.now()}`,
      userId: payload.userId,
      amountAr: payload.amountAr,
      senderNumber: payload.senderNumber,
      sentAt: payload.sentAt,
      status: "pending"
    };

    return this.repository.create(request);
  }
}
