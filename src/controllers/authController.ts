import { Request, Response } from "express";
import RegisterUserService from "../services/registerUserService";
import LoginService from "../services/loginService";

export type RegisterInput = {
  email: string;
  password: string;
};

class AuthController {
  private registerUserService: RegisterUserService;

  private loginService: LoginService;

  constructor() {
    this.registerUserService = new RegisterUserService();
    this.loginService = new LoginService();
  }

  async register(req: Request<{}, {}, RegisterInput>, res: Response) {
    try {
      const result = await this.registerUserService.execute(req.body);
      res.status(201).json(result);
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  }

  async login(req: Request<{}, {}, RegisterInput>, res: Response) {
    try {
      const result = await this.loginService.execute(req.body);
      res.status(200).json(result);
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  }
}

export default new AuthController();
