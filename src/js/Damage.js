class Damage {
  constructor(stoned) {
    this.stoned = stoned;
    this.attack = 100;
  }

  get attackValue() {
    return this.attack;
  }

  set attackValue(distance) {
    this.attack = distance === 1 ? this.attack : this.attack - (distance - 1) * 10;
    if (this.stoned) {
      this.attack -= Math.log2(distance) * 5;
    }
  }
}

export default Damage;
