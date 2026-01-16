import { VisitRequest } from "../models/visitRequest";
import { UserRepository } from "../repositories/userRepository";
import { VisitRepository } from "../repositories/visitRepository";

const VISIT_FEE_AR = 5000;

export interface RequestVisitPayload {
  listingId: string;
  requesterId: string;
  scheduledAt: string;
}

export class VisitService {
  constructor(
    private readonly visitRepository: VisitRepository,
    private readonly userRepository: UserRepository
  ) {}

  async requestVisit(payload: RequestVisitPayload): Promise<VisitRequest> {
    const request: VisitRequest = {
      id: `visit-${Date.now()}`,
      listingId: payload.listingId,
      requesterId: payload.requesterId,
      requestedAt: new Date().toISOString(),
      scheduledAt: payload.scheduledAt,
      status: "pending",
      visitFeeAr: VISIT_FEE_AR
    };

    return this.visitRepository.create(request);
  }

  async acceptVisit(id: string): Promise<VisitRequest> {
    const visit = await this.visitRepository.findById(id);
    if (!visit) {
      throw new Error("Visit request not found.");
    }

    const user = await this.userRepository.findById(visit.requesterId);
    if (!user) {
      throw new Error("Requester not found.");
    }

    if (user.balanceAr < VISIT_FEE_AR) {
      throw new Error("Insufficient balance.");
    }

    await this.userRepository.update(user.id, {
      balanceAr: user.balanceAr - VISIT_FEE_AR
    });

    const updated = await this.visitRepository.update(id, { status: "accepted" });
    if (!updated) {
      throw new Error("Unable to update visit.");
    }

    return updated;
  }
}
