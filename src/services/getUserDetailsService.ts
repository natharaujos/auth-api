import { UserDetailsInput } from "../controllers/userController";
import prisma from "../prismaClient";
import { getUserDetailsSchema } from "../validators/userValidator";

export default class GetUserDetailsService {
  async execute(input: UserDetailsInput) {
    const { error } = getUserDetailsSchema.validate(input);

    if (error) throw new Error(error.details[0].message);

    const { userId } = input;

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) throw new Error("Este usuário não está cadastrado, registre-o!");

    return {
      id: user.id,
      email: user.email,
      createdAt: user.createdAt,
    };
  }
}
