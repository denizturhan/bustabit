const { data } = require("./data.json");

const ma = (a) => {
  let total = 0;
  const l = a.length;
  a.forEach((e) => {
    total += e.busted;
  });

  return total / l;
};

const bestPayout = (r) => {
  // payout 1 ile 10 arasında denenecek
};

module.exports = {
  ma,
  data,
};
