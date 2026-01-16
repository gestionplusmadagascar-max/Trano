import { Listing } from "../models/listing";
import { PaymentRequest } from "../models/payment";
import { User } from "../models/user";
import { VisitRequest } from "../models/visitRequest";

export const users: User[] = [
  {
    id: "usr-001",
    name: "Aina Rakoto",
    email: "aina@trano.com",
    balanceAr: 75000,
    locale: "fr",
    theme: "light",
    createdAt: new Date().toISOString()
  }
];

export const listings: Listing[] = [
  {
    id: "lst-001",
    title: "Villa contemporaine avec jardin",
    description: "Villa premium avec piscine, salon double hauteur et jardin paysager.",
    region: "Analamanga",
    city: "Antananarivo",
    neighborhood: "Ivandry",
    type: "residentiel",
    intent: "vente",
    priceAr: 2300000000,
    visitRightAr: 10000,
    isBoosted: true,
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"
    ],
    ownerId: "usr-001",
    createdAt: new Date().toISOString()
  }
];

export const visits: VisitRequest[] = [];
export const payments: PaymentRequest[] = [];
