export class VisitController {
  constructor(visitService) {
    this.visitService = visitService;
  }

  request = async (req, res) => {
    try {
      const visit = await this.visitService.requestVisit(req.body);
      res.status(201).json(visit);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  accept = async (req, res) => {
    try {
      const visit = await this.visitService.acceptVisit(req.params.id);
      res.json(visit);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
}
