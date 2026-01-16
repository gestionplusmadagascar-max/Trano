import { apiFetch } from "./api";

export async function requestVisit(payload) {
  return apiFetch("/api/visits", {
    method: "POST",
    body: JSON.stringify(payload)
  });
}
