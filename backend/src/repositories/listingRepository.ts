import { Listing } from "../models/listing";

export interface ListingRepository {
  list(): Promise<Listing[]>;
  findById(id: string): Promise<Listing | null>;
  create(listing: Listing): Promise<Listing>;
  update(id: string, listing: Partial<Listing>): Promise<Listing | null>;
}
