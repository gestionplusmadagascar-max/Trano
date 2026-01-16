import { Listing, ListingIntent, ListingType } from "../models/listing";
import { ListingRepository } from "../repositories/listingRepository";
import { sanitizeListingText } from "./contentModeration";

export interface CreateListingPayload {
  title: string;
  description: string;
  region: string;
  city: string;
  neighborhood?: string;
  type: ListingType;
  intent: ListingIntent;
  priceAr: number;
  visitRightAr: number;
  images: string[];
  ownerId: string;
  acceptAssistedSale?: boolean;
}

export class ListingService {
  constructor(private readonly repository: ListingRepository) {}

  async list() {
    return this.repository.list();
  }

  async create(payload: CreateListingPayload): Promise<Listing> {
    const requiresAssistedSale =
      payload.intent === "vente" && payload.region.toLowerCase() === "analamanga";

    if (requiresAssistedSale && !payload.acceptAssistedSale) {
      throw new Error("Assisted sale consent required for Analamanga sales.");
    }

    const moderation = sanitizeListingText(payload.description);

    const listing: Listing = {
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
