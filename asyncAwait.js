// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/comments

console.log("........async await .......");

// fetch(" https://jsonplaceholder.typicode.com/users")
// .then(res =>res.json())
// .then(data =>console.log(data))

// or ///
// const getUser = async()=>{
// const res = await fetch(" https://jsonplaceholder.typicode.com/users")
// const data  = await res.json()
// console.log(data)
// }
// getUser()
// // or ///

const promise = new Promise((resolved) => {
  setTimeout(resolved, 1000, "done hoia gese");
});

const asyncFunction = async () => {
  try {
    const result = await promise;
    console.log(result);
  } catch {
    console.log("Error hoi gese ");
  }
};

// asyncFunction();
const urls = [
  " https://jsonplaceholder.typicode.com/users",
  " https://jsonplaceholder.typicode.com/posts",
  " https://jsonplaceholder.typicode.com/comments",
];

const fetchData2 = async () => {
  const result = await Promise.all(
    urls.map((url) => fetch(url).then((res) => res.json()))
  );
  console.log(result);
};

fetchData2();
