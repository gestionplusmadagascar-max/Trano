export type ListingType = "residentiel" | "professionnel" | "terrain";
export type ListingIntent = "vente" | "location";

export interface Listing {
  id: string;
  title: string;
  description: string;
  region: string;
  city: string;
  neighborhood?: string;
  type: ListingType;
  intent: ListingIntent;
  priceAr: number;
  visitRightAr: number;
  isBoosted: boolean;
  images: string[];
  ownerId: string;
  createdAt: string;
}
