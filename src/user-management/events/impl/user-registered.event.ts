export class UserRegisteredEvent {
  public readonly id: string;
  public readonly name: string;
  constructor({ id, name }: { id: string; name: string }) {
    this.id = id;
    this.name = name;
  }
}
