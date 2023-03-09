console.log("--------paralalRace ---------");

const promisify = (item, delay) => {
  const promise = new Promise((resolved) => {
    setTimeout(() => resolved(item), delay);
  });
  return promise;
};

const task1 = () => promisify("Task one", 500);
const task2 = () => promisify("Task two", 1000);
const task3 = () => promisify("Task three", 1500);
// console.log(task1());
// console.log(task2());
// console.log(task3());

// // ** add race from JS
// /// ** we can use race by all and result only 
const parallel = async () => {
  const promises = [task1(), task2(), task3()];
  const [result1, result2, result3] = await Promise.race(promises);
  return `Parallel done ${result1} and ${result2} and ${result3}`;
};

parallel().then(console.log);
