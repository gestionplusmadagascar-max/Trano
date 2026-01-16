export class UserController {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  list = async (_req, res) => {
    const users = await this.userRepository.list();
    res.json(users);
  };
}
