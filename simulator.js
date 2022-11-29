const { ma } = require("./calculator");
const { data } = require("./data.json");
const user = {
  name: "Deniz",
  bits: 100000,
};

const simulator = (bet, payout, options) => {
  let betAmount = bet;

  console.log(betAmount);

  const stats = {
    win: 0,
    lose: 0,
    percentWin: () => ((stats.win * 100) / data.length).toFixed(2),
  };

  let gameOverID = [];

  data.forEach((e, i) => {
    if (user.bits <= 0) return;
    if (user.bits < betAmount) return gameOverID.push(i);
    user.bits -= betAmount;
    if (e.busted >= payout) {
      user.bits += betAmount * payout;
      stats.win++;
      betAmount = bet;
    } else {
      if (options?.loseAnd?.status) {
        betAmount *= options.loseAnd.multiplier;
      }
      stats.lose++;
    }
  });
  console.log(Math.min(...gameOverID));
  console.log(user.bits, " %" + stats.percentWin() + " win");
};

module.exports = simulator;
