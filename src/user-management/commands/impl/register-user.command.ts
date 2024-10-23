export class RegisterUserCommand {
  public readonly name: string;
  constructor({ name }: { name: string }) {
    this.name = name;
  }
}
