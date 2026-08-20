const p = new Promise((resolve, reject) => {
  console.log("promise created"); // executor function: promise ke andr chlne vala function :: synchronously chlta hai
  resolve("done"); // resolve and reject :: asynchronous
  reject("error"); // :: only one will be executed
}).then((value) => {
  console.log(value);
}).catch((err) => {
  console.log(err);
});
