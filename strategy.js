const simulator = require("./simulator");

class Strategy {
  constructor(name, bet, payout, options) {
    this.name = name;
    this.bet = bet;
    this.payout = payout;
    this.options = options;
  }

  run() {
    simulator(this.bet, this.payout, this.options);
  }
}

const bedo = new Strategy().run();

const deniz = new Strategy().run();
