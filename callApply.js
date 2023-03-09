console.log("<===--------start========> CallApply.js");

const Dinku = {
  company: "LalSObuj",
  serialCode: "ths",
  bookings: [],
  // book:function(){}
  book(name, id) {
    console.log(
      `${name} is booked a seat in ${this.company} with ${this.serialCode}`
    );
    this.bookings.push({
      name,
      bus: `${this.company} ${this.serialCode} ${id}`,
    });
  },
};

Dinku.book("Zinku", 2000);
// console.log(Dinku, "sinku");
// console.log(, "from datas");
const book = Dinku.book;
book.call(Dinku, "Dihan", 2345);
book.call(Dinku, "Allu", 1564);

// console.log(Dinku);

// /  Awesome Calling //////

const Ponku = {
  company: "Ekhusey",
  serialCode: "POnn",
  bookings: [],
};

book.call(Ponku, "Ponku", 51223);
console.log("ponku", Ponku.bookings);
