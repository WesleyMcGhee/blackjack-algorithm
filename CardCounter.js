export default class CardCounter {
  constructor() {
    this.count = 0;
  }

  InspectCards(num) {
    if (num === 1) {
      this.count -= 1;
    } else if (num >= 2 && num <= 6) {
      this.count += 1;
    } else if (num === 10) {
      this.count -= 1;
    }
  }
}
