import { User } from "../../models/user";
import { UserRepository } from "../../repositories/userRepository";
import { users } from "../inMemoryDb";

export class InMemoryUserRepository implements UserRepository {
  async list(): Promise<User[]> {
    return users;
  }

  async findById(id: string): Promise<User | null> {
    return users.find(user => user.id === id) ?? null;
  }

  async update(id: string, payload: Partial<User>): Promise<User | null> {
    const index = users.findIndex(user => user.id === id);
    if (index === -1) {
      return null;
    }
    users[index] = { ...users[index], ...payload };
    return users[index];
  }
}
