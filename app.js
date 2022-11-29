const { ma, data } = require("./calculator");
const simulator = require("./simulator");
simulator(100, 1.66, {
  skip: 5,
  loseAnd: {
    status: true,
    multiplier: 1.66,
  },
});
