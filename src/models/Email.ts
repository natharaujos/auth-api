class Email {
  private value: string;

  constructor(value: string) {
    if (!value.includes("@")) {
      throw new Error("Invalid email, please provide a correct one");
    }

    this.value = value;
  }

  getValue() {
    return this.value;
  }
}

export default Email;
