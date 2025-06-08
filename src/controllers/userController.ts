import { Request, Response } from "express";
import GetUserDetailsService from "../services/getUserDetailsService";

export type UserDetailsInput = {
  userId: number;
};

class UserController {
  private getUserDetailsService: GetUserDetailsService;

  constructor() {
    this.getUserDetailsService = new GetUserDetailsService();
  }

  async getDetails(req: Request<{}, {}, UserDetailsInput>, res: Response) {
    try {
      const result = await this.getUserDetailsService.execute(req.body);
      res.status(201).json(result);
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  }
}

export default new UserController();
