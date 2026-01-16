import { payments } from "../inMemoryDb.js";

export class InMemoryPaymentRepository {
  async list() {
    return payments;
  }

  async create(request) {
    payments.push(request);
    return request;
  }
}
