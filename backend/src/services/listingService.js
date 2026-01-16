import { sanitizeListingText } from "./contentModeration.js";

export class ListingService {
  constructor(repository) {
    this.repository = repository;
  }

  async list() {
    return this.repository.list();
  }

  async create(payload) {
    const requiresAssistedSale =
      payload.intent === "vente" && payload.region.toLowerCase() === "analamanga";

    if (requiresAssistedSale && !payload.acceptAssistedSale) {
      throw new Error("Assisted sale consent required for Analamanga sales.");
    }

    const moderation = sanitizeListingText(payload.description);

    const listing = {
      id: `lst-${Date.now()}`,
      title: payload.title,
      description: moderation.sanitized,
      region: payload.region,
      city: payload.city,
      neighborhood: payload.neighborhood,
      type: payload.type,
      intent: payload.intent,
      priceAr: payload.priceAr,
      visitRightAr: payload.visitRightAr,
      isBoosted: false,
      images: payload.images,
      ownerId: payload.ownerId,
      createdAt: new Date().toISOString()
    };

    return this.repository.create(listing);
  }
}
