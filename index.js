// const colors = require("colors");

// console.log("started index.js".green.bold.underline);

console.log("<===--------start========>");

const CarProto = {
  totalProfit() {
    return this.price * this.stock;
  },
};

const m8 = Object.create(CarProto);
m8.brand = "BMW";
m8.price = 10;
m8.stock = 3;
console.log(m8, "m8");
