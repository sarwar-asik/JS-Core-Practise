console.log("<===--------start========> classInheriteance.js");

const Person = function (name, birthYear) {
  (this.name = name), (this.birthYear = birthYear);
};

Person.prototype.calculateAge = function (year) {
  return year - this.birthYear;
};

const asik = new Person("asik", 1999);
// console.log(asik.calculateAge(2023));

const Student = function (name, birthYear, subject) {
  (this.name = name), (this.birthYear = birthYear), (this.subject = subject);
};

const mezba = new Student("Mejbah Babu", 1965, "science");
console.log(mezba);
