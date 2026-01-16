import { VisitRepository } from "../../repositories/visitRepository";
import { VisitRequest } from "../../models/visitRequest";
import { visits } from "../inMemoryDb";

export class InMemoryVisitRepository implements VisitRepository {
  async list(): Promise<VisitRequest[]> {
    return visits;
  }

  async findById(id: string): Promise<VisitRequest | null> {
    return visits.find(item => item.id === id) ?? null;
  }

  async create(request: VisitRequest): Promise<VisitRequest> {
    visits.push(request);
    return request;
  }

  async update(id: string, payload: Partial<VisitRequest>): Promise<VisitRequest | null> {
    const index = visits.findIndex(item => item.id === id);
    if (index === -1) {
      return null;
    }
    visits[index] = { ...visits[index], ...payload };
    return visits[index];
  }
}
