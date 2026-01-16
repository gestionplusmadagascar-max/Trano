import { apiFetch } from "./api";

export async function fetchUsers() {
  return apiFetch("/api/users");
}

export async function fetchCurrentUser() {
  const users = await fetchUsers();
  return users[0];
}
