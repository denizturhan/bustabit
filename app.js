const { ma, data } = require("./calculator");
const simulator = require("./simulator");
simulator(100, 2, {
  skip: 5,
  loseAnd: {
    status: true,
    multiplier: 2,
  },
});
