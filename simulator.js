const { ma } = require("./calculator");
const { data } = require("./data.json");
const user = {
  name: "Deniz",
  bits: 100000,
};

const simulator = (bet, payout) => {
  const stats = {
    win: 0,
    lose: 0,
    percentWin: () => ((stats.win * 100) / data.length).toFixed(2),
  };
  data.forEach((e) => {
    user.bits -= bet;
    if (e.busted >= payout) {
      user.bits += bet * payout;
      stats.win++;
    } else stats.lose++;
  });
  console.log(user.bits, " %" + stats.percentWin() + " win");
};

module.exports = simulator;
