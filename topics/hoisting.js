console.log("test 1")
var a = 10;
function test() {
  console.log(a);
  var a = 20; // rehoisting inside function     a = undefined
  console.log(a);  // 20
}
test()


console.log("test 2")
var b = 100;
function test2() {
  console.log(b);
  if (true) {
    var b = 50;
  }
  console.log(b);
}
test2()
console.log(b)
