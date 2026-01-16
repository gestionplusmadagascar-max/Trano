import { Request, Response } from "express";
import { ListingService } from "../services/listingService";
import { BoostService } from "../services/boostService";

export class ListingController {
  constructor(
    private readonly listingService: ListingService,
    private readonly boostService: BoostService
  ) {}

  list = async (_: Request, res: Response) => {
    const listings = await this.listingService.list();
    res.json(listings);
  };

  create = async (req: Request, res: Response) => {
    try {
      const listing = await this.listingService.create(req.body);
      res.status(201).json(listing);
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  };

  boost = async (req: Request, res: Response) => {
    try {
      const { listingId } = req.params;
      const { userId } = req.body;
      const listing = await this.boostService.boostListing(listingId, userId);
      res.json(listing);
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  };
}
