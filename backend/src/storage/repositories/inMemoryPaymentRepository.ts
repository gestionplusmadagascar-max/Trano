import { PaymentRepository } from "../../repositories/paymentRepository";
import { PaymentRequest } from "../../models/payment";
import { payments } from "../inMemoryDb";

export class InMemoryPaymentRepository implements PaymentRepository {
  async list(): Promise<PaymentRequest[]> {
    return payments;
  }

  async create(request: PaymentRequest): Promise<PaymentRequest> {
    payments.push(request);
    return request;
  }
}
