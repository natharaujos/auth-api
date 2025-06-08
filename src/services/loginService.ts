import { RegisterInput } from "../controllers/authController";
import prisma from "../prismaClient";
import { loginSchema } from "../validators/authValidator";
import bcrypt from "bcrypt";

export default class LoginService {
  async execute(input: RegisterInput) {
    const { error } = loginSchema.validate(input);

    if (error) throw new Error(error.details[0].message);

    const { email, password } = input;

    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (!existingUser)
      throw new Error("Este usuário não está cadastrado, registre-o!");

    const validUser = await bcrypt.compare(password, existingUser.password);

    if (!validUser) throw new Error("Senha incorreta, digite novamente.");

    return {
      message: "Usuário logado com sucesso.",
    };
  }
}
