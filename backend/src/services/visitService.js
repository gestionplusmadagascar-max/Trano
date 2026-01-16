const VISIT_FEE_AR = 5000;

export class VisitService {
  constructor(visitRepository, userRepository) {
    this.visitRepository = visitRepository;
    this.userRepository = userRepository;
  }

  async requestVisit(payload) {
    const request = {
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

  async acceptVisit(id) {
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
