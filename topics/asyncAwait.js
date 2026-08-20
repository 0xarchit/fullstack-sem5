// async function hello() {
//   return "Hello World!";
// }

// const result = hello();

// result.then((message) => {
//   console.log(message);
// })

function getUser(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("User data received");
        }, 2000);
    });
}

async function getData(){
    console.log(1);
    const response = await getUser();
    console.log(response);
    console.log(3);

}
getData();
console.log(4);
