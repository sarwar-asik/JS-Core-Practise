// const colors = require("colors");

// console.log("started index.js".green.bold.underline);

console.log("<===--------start========> index.js");

const CarProto = {
  totalProfit() {
    return this.price * this.stock;
  },
  creator(brand, price, stock) {
    this.brand = brand;
    this.price = price;
    this.stock = stock;
  },
};

const m8 = Object.create(CarProto);
m8.creator("BMW", 10000, 5);
// console.log(m8, "m8");
const zing = Object.create(CarProto);
zing.creator("Zing", 3000, 8);
// console.log(zing, "zing");
