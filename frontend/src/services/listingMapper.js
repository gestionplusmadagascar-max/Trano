const TYPE_LABELS = {
  residentiel: "Résidentiel",
  professionnel: "Professionnel",
  terrain: "Terrain"
};

const INTENT_LABELS = {
  vente: "Vente",
  location: "Location"
};

function formatPrice(priceAr, intent) {
  if (!priceAr) {
    return "";
  }
  const formatted = new Intl.NumberFormat("fr-FR").format(priceAr);
  return intent === "location" ? `Ar ${formatted} / mois` : `Ar ${formatted}`;
}

export function normalizeListing(listing) {
  if (listing.price) {
    return listing;
  }

  const locationParts = [listing.neighborhood, listing.city].filter(Boolean).join(", ");
  const intentLabel = INTENT_LABELS[listing.intent] ?? listing.intent;
  const typeLabel = TYPE_LABELS[listing.type] ?? listing.type;

  return {
    id: listing.id,
    title: listing.title,
    location: locationParts,
    region: listing.region,
    city: listing.city,
    price: formatPrice(listing.priceAr, listing.intent),
    type: typeLabel,
    intent: intentLabel,
    visitRight: `Ar ${new Intl.NumberFormat("fr-FR").format(listing.visitRightAr ?? 0)}`,
    isBoosted: listing.isBoosted,
    images: listing.images?.length ? listing.images : ["https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"],
    raw: listing
  };
}
