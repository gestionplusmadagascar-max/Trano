import { Request, Response } from "express";
import { VisitService } from "../services/visitService";

export class VisitController {
  constructor(private readonly visitService: VisitService) {}

  request = async (req: Request, res: Response) => {
    try {
      const visit = await this.visitService.requestVisit(req.body);
      res.status(201).json(visit);
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  };

  accept = async (req: Request, res: Response) => {
    try {
      const visit = await this.visitService.acceptVisit(req.params.id);
      res.json(visit);
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  };
}
