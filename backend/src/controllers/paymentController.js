export class PaymentController {
  constructor(paymentService) {
    this.paymentService = paymentService;
  }

  list = async (_req, res) => {
    const payments = await this.paymentService.list();
    res.json(payments);
  };

  create = async (req, res) => {
    try {
      const payment = await this.paymentService.create(req.body);
      res.status(201).json(payment);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
}
