import { Request, Response } from "express";
import RegisterUserService from "../services/registerUserService";

export type RegisterInput = {
  email: string;
  password: string;
};

class AuthController {
  private registerUserService: RegisterUserService;

  constructor() {
    this.registerUserService = new RegisterUserService();
  }

  async register(req: Request<{}, {}, RegisterInput>, res: Response) {
    try {
      const result = await this.registerUserService.execute(req.body);
      res.status(201).json(result);
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  }
}

export default new AuthController();
