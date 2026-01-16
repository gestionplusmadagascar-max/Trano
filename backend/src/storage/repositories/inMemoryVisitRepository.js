import { visits } from "../inMemoryDb.js";

export class InMemoryVisitRepository {
  async list() {
    return visits;
  }

  async findById(id) {
    return visits.find(item => item.id === id) ?? null;
  }

  async create(request) {
    visits.push(request);
    return request;
  }

  async update(id, payload) {
    const index = visits.findIndex(item => item.id === id);
    if (index === -1) {
      return null;
    }
    visits[index] = { ...visits[index], ...payload };
    return visits[index];
  }
}
