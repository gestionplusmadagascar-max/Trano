export interface Listing {
  id: string;
  title: string;
  location: string;
  region: string;
  city: string;
  price: string;
  type: "Résidentiel" | "Professionnel" | "Terrain";
  intent: "Vente" | "Location";
  visitRight: string;
  isBoosted: boolean;
  images: string[];
}

export const listings: Listing[] = [
  {
    id: "trn-001",
    title: "Villa contemporaine avec jardin",
    location: "Ivandry, Antananarivo",
    region: "Analamanga",
    city: "Antananarivo",
    price: "Ar 2 300 000 000",
    type: "Résidentiel",
    intent: "Vente",
    visitRight: "Ar 10 000",
    isBoosted: true,
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "trn-002",
    title: "Plateau bureau lumineux",
    location: "Ankorondrano, Antananarivo",
    region: "Analamanga",
    city: "Antananarivo",
    price: "Ar 12 000 000 / mois",
    type: "Professionnel",
    intent: "Location",
    visitRight: "Ar 5 000",
    isBoosted: true,
    images: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "trn-003",
    title: "Terrain viabilisé vue mer",
    location: "Morrod, Mahajanga",
    region: "Boeny",
    city: "Mahajanga",
    price: "Ar 480 000 000",
    type: "Terrain",
    intent: "Vente",
    visitRight: "Ar 5 000",
    isBoosted: false,
    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "trn-004",
    title: "Appartement haut standing",
    location: "Ambatobe, Antananarivo",
    region: "Analamanga",
    city: "Antananarivo",
    price: "Ar 6 500 000 / mois",
    type: "Résidentiel",
    intent: "Location",
    visitRight: "Ar 5 000",
    isBoosted: false,
    images: [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"
    ]
  }
];
