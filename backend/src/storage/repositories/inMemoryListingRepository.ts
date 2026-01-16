import { Listing } from "../../models/listing";
import { ListingRepository } from "../../repositories/listingRepository";
import { listings } from "../inMemoryDb";

export class InMemoryListingRepository implements ListingRepository {
  async list(): Promise<Listing[]> {
    return listings;
  }

  async findById(id: string): Promise<Listing | null> {
    return listings.find(item => item.id === id) ?? null;
  }

  async create(listing: Listing): Promise<Listing> {
    listings.push(listing);
    return listing;
  }

  async update(id: string, payload: Partial<Listing>): Promise<Listing | null> {
    const index = listings.findIndex(item => item.id === id);
    if (index === -1) {
      return null;
    }
    listings[index] = { ...listings[index], ...payload };
    return listings[index];
  }
}
