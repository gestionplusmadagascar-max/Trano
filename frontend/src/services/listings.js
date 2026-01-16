import { apiFetch } from "./api";

export async function fetchListings() {
  return apiFetch("/api/listings");
}

export async function boostListing(listingId, userId) {
  return apiFetch(`/api/listings/${listingId}/boost`, {
    method: "POST",
    body: JSON.stringify({ userId })
  });
}
