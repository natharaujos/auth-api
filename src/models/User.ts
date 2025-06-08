import Email from "./Email";

class User {
  private email: Email;

  private password: string;

  constructor(email: string, password: string) {
    this.email = new Email(email);
    this.password = password;
  }
}

export default User;
