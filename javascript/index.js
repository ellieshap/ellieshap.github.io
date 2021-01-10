console.clear();
console.log("Hey!");
let x = 5;
if (x > 2) {
  console.log("it was greater");
} else {
  console.log("it was NOT greater :(");
}

function sum(a, b) {
  let answer = a + b;
  return answer;
}
let result = sum(790, 73);
console.log(result);

let result2 = sum(57, 70);
console.log(result2);

let mybutton = document.getElementById("pressmebutton");
mybutton.addEventListener("click", sayhi);

function sayhi() {
  let greeter = document.getElementById("greeting");
  greeter.innterText = "Hello!!";
}
