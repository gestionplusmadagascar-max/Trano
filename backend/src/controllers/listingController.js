export class ListingController {
  constructor(listingService, boostService) {
    this.listingService = listingService;
    this.boostService = boostService;
  }

  list = async (_req, res) => {
    const listings = await this.listingService.list();
    res.json(listings);
  };

  create = async (req, res) => {
    try {
      const listing = await this.listingService.create(req.body);
      res.status(201).json(listing);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  boost = async (req, res) => {
    try {
      const { listingId } = req.params;
      const { userId } = req.body;
      const listing = await this.boostService.boostListing(listingId, userId);
      res.json(listing);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
}
