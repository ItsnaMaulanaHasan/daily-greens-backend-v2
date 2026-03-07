import { injectable } from "tsyringe";
import { User } from "../models/user.model";

@injectable()
export class UserRepository {
  async create(data: Partial<User>) {
    return User.create(data);
  }

  async findAll() {
    return User.findAll();
  }
}
