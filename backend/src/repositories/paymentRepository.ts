import { PaymentRequest } from "../models/payment";

export interface PaymentRepository {
  list(): Promise<PaymentRequest[]>;
  create(request: PaymentRequest): Promise<PaymentRequest>;
}
