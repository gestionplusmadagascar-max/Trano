export class PaymentService {
  constructor(repository) {
    this.repository = repository;
  }

  async list() {
    return this.repository.list();
  }

  async create(payload) {
    const request = {
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
