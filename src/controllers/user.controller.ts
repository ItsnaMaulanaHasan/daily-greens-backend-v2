import type { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { UserService } from "../services/user.service";

@injectable()
export class UserController {
  constructor(
    @inject(UserService)
    private userService: UserService,
  ) {}

  async createUser(req: Request, res: Response) {
    const user = await this.userService.createUser(req.body);
    return res.status(201).json(user);
  }

  async getUsers(req: Request, res: Response) {
    const users = await this.userService.getUsers();

    return res.status(200).json(users);
  }
}
