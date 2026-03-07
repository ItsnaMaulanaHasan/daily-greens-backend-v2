import { inject, injectable } from "tsyringe";
import { UserRepository } from "../repositories/user.repository";

@injectable()
export class UserService {
  constructor(
    @inject(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async createUser(data: any) {
    return this.userRepository.create(data);
  }

  async getUsers() {
    return this.userRepository.findAll();
  }
}
