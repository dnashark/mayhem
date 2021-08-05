export default class Table {
  readonly width: number;
  readonly height: number;

  constructor(width: number, height: number) {
    if (width < 0 || height < 0) throw 'Width and height must be positive numbers.';
    this.width = width;
    this.height = height;
  }
}