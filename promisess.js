// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/comments

const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("Resolve hoia gese");
  } else {
    reject("rejected hoia gese ");
  }
});

// promise.then((res) => console.log(res));
// or ///
// promise.then(console.log);
// or //

// // true hoile
// promise
//   .then((res1) => res1 + "kintu I am in confution")
//   .then((res2) => console.log(res2))
//   .catch(err=> console.log(err))

const promise1 = new Promise((resolved) => {
  setTimeout(resolved, 500, "hello");
});
const promise2 = new Promise((resolved) => {
  setTimeout(resolved, 300, "Bangladesh");
});

Promise.all([promise1, promise2])
  .then(console.log)
  .catch((err) => console.log(err));


  const urls =[
    " https://jsonplaceholder.typicode.com/users",
    " https://jsonplaceholder.typicode.com/posts",
    " https://jsonplaceholder.typicode.com/comments"
  ]

  Promise
  .all(urls
    .map(url =>
        fetch(url)
        .then(res =>res.json())))
            .then(data =>{
              console.log("totalData",data)
              })
                .catch(error =>console.log(error))