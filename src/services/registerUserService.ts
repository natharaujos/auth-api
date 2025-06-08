import { RegisterInput } from "../controllers/authController";
import prisma from "../prismaClient";
import { registerSchema } from "../validators/authValidator";
import { Response } from "express";
import bcrypt from "bcrypt";

export default class RegisterUserService {
  async execute(input: RegisterInput) {
    const { error } = registerSchema.validate(input);

    if (error) throw new Error(error.details[0].message);

    const { email, password } = input;

    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) throw new Error("Este e-mail já está cadastrado");

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    await prisma.user.create({
      data: { email: email, password: hashedPassword },
    });

    return {
      message: "Usuário criado com sucesso.",
    };
  }
}
