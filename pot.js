const DEFAULT_VALUE = 200;

module.exports = class Pot {
  constructor() {
    this.value = DEFAULT_VALUE;
    this.reset();
  }

  increase() {
    this.value += 10;
  }

  winningPot(){
    let halfPot = Math.floor(this.value / 2)
    this.value -= halfPot
    return halfPot
  }
  reset() {
    this.value = DEFAULT_VALUE;
  }
}
