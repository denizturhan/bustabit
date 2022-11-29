const { ma, data } = require("./calculator");
const simulator = require("./simulator");
simulator(250, ma(data));
