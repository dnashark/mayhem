export default class Die {
  private n: number;

  private constructor(n: number) {
    if (!Number.isInteger(n) || n < 1) {
      throw 'n must be an integer of at least 1'
    }
    this.n = n;
  }

  roll(): number {
    return Math.floor(Math.random() * this.n) + 1;
  }

  default(): number {
    return Math.ceil(this.n / 2);
  }

  static d4 = new Die(4);
  static d6 = new Die(6);
  static d8 = new Die(8);
  static d10 = new Die(10);
  static d12 = new Die(12);
  static d20 = new Die(20);
}