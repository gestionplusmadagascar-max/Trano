import { listings } from "../inMemoryDb.js";

export class InMemoryListingRepository {
  async list() {
    return listings;
  }

  async findById(id) {
    return listings.find(item => item.id === id) ?? null;
  }

  async create(listing) {
    listings.push(listing);
    return listing;
  }

  async update(id, payload) {
    const index = listings.findIndex(item => item.id === id);
    if (index === -1) {
      return null;
    }
    listings[index] = { ...listings[index], ...payload };
    return listings[index];
  }
}
