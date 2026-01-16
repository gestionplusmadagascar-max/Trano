import { Request, Response } from "express";
import { UserRepository } from "../repositories/userRepository";

export class UserController {
  constructor(private readonly userRepository: UserRepository) {}

  list = async (_: Request, res: Response) => {
    const users = await this.userRepository.list();
    res.json(users);
  };
}
