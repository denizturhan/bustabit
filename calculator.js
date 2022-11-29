const { data } = require("./data.json");

/* const example = {
  data: [
    { busted: 1.01, gameId: 6753941 },
    { busted: 2.01, gameId: 6753942 },
    { busted: 3.01, gameId: 6753943 },
  ],
};
for (let i = 0; i < example.data.length; i++) {
  console.log(example.data[i]);
} */

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
