export type PaymentStatus = "pending" | "validated" | "rejected";

export interface PaymentRequest {
  id: string;
  userId: string;
  amountAr: number;
  senderNumber: string;
  sentAt: string;
  status: PaymentStatus;
}
