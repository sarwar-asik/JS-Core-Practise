console.log("--------paralalRace ---------");

const promisify = (item, delay) => {
  const promise = new Promise((resolved) => {
    setTimeout(() => resolved(item), delay);
  });
  return promise;
};

const task1 = () => promisify("Task one", 2500);
const task2 = () => promisify("Task two", 1000);
const task3 = () => promisify("Task three", 1500);
// console.log(task1());
// console.log(task2());
// console.log(task3());

// // ** add race from JS
// /// ** we can use race by all and result only 
const parallel = async () => {
  const promises = [task1(), task2(), task3()];
  const result = await Promise.race(promises);
  return `Parallel done ${result}`;
};

// parallel().then(console.log);


const sequential = async()=>{
const result1 =await task1()
// console.log(result1);
const result2 =await task2()
// console.log(result2);
const result3 =await task3()
// console.log(result3);
return `Sequential DOne ${result1} and ${result2} and ${result3}`
}


sequential().then(console.log)