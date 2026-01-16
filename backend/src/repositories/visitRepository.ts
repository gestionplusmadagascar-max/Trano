import { VisitRequest } from "../models/visitRequest";

export interface VisitRepository {
  list(): Promise<VisitRequest[]>;
  findById(id: string): Promise<VisitRequest | null>;
  create(request: VisitRequest): Promise<VisitRequest>;
  update(id: string, payload: Partial<VisitRequest>): Promise<VisitRequest | null>;
}
