console.log("<<<<<<<<<<<<<<< Es6ClassInheritance.js >>>>>>>");

class Person {
  constructor(name, birthYear) {
    (this.name = name), (this.birthYear = birthYear);
  }
  calculateAge() {
    return 2030 - this.birthYear;
  }
}

const sizan = new Person("SIzan", 1970);
console.log(sizan);

class Student extends Person {
  constructor(name, birthYear, subject) {
    super(name, birthYear);
    this.subject = subject;
  }

//   It is Optional . You can call it
//   calculateAge() {
//     return 2040 - this.birthYear;
//   }

}

const fahim = new Student("Fahim", 1934, "Physics");
console.log(fahim);
console.log("fahim Age", fahim.calculateAge());
