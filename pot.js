module.exports = class Pot {
  constructor() {
    this.value = 200;
    this.reset();
  }

  increase() {
    return this.value += 10;
  }

  reset() {
    this.value = 200;
  }
}
