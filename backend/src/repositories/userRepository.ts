import { User } from "../models/user";

export interface UserRepository {
  list(): Promise<User[]>;
  findById(id: string): Promise<User | null>;
  update(id: string, user: Partial<User>): Promise<User | null>;
}
