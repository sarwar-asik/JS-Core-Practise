console.log("<===--------start========> classInheriteance.js");

const Person = function (name, birthYear) {
  (this.name = name), (this.birthYear = birthYear);
};

Person.prototype.calculateAge = function (year) {
  return year - this.birthYear;
};

const asik = new Person("asik", 1999);
console.log("age", asik.calculateAge(2023));
                               const Student = function (name, birthYear, subject) {
  //   (this.name = name), (this.birthYear = birthYear), (this.subject = subject);
  Person.call(this, name, birthYear);
  this.subject = subject;
};

// create a prototype form call Person in student
Student.prototype = Object.create(Person.prototype);

// /** */ create Prototype //*** */
Student.prototype.introDuction = function () {
  return ` I am ${this.name}`;
};

const mezba = new Student("Mejbah Babu", 1965, "science");
console.table(mezba);
console.log(mezba.introDuction());

console.log("created Proto age", mezba.calculateAge(2003));
