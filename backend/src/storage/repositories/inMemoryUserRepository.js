import { users } from "../inMemoryDb.js";

export class InMemoryUserRepository {
  async list() {
    return users;
  }

  async findById(id) {
    return users.find(user => user.id === id) ?? null;
  }

  async update(id, payload) {
    const index = users.findIndex(user => user.id === id);
    if (index === -1) {
      return null;
    }
    users[index] = { ...users[index], ...payload };
    return users[index];
  }
}
