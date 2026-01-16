export type VisitStatus = "pending" | "accepted" | "refused";

export interface VisitRequest {
  id: string;
  listingId: string;
  requesterId: string;
  requestedAt: string;
  scheduledAt: string;
  status: VisitStatus;
  visitFeeAr: number;
}
