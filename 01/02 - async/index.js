/* CHALLENGE 1 */

function sayHowdy() {
  console.log("Howdy");
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log("Partnah");
}
testMe();
//Partnah
//Howdy


/* CHALLENGE 2 */

function delayedGreet() {
  setTimeout(() => console.log('welcome'), 3000)
}

delayedGreet(); // should log (after 3 seconds): welcome

/* CHALLENGE 3 */

function helloGoodbye() {
  console.log('hello');
  setTimeout(()=>console.log('good bye'), 3000);
}
helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye


/* CHALLENGE 4 */
var abc
function brokenRecord() {
  abc = setInterval(() => {
    console.log('hi again')
  }, 1000);
  document.addEventListener("click", () => clearInterval(abc))
}
brokenRecord(); // should log (every second): hi again

//To stop the code.


/* CHALLENGE 5 */
var timer
function limitedRepeat() {
  timer = setInterval(() => {
    console.log('hi bro') 
  }, 1000);
  setTimeout(() => {
    clearInterval(timer)
  }, 5000);
}

limitedRepeat(); // should log (every second, for 5 seconds): hi for now

/* CHALLENGE 6 */

var timer
function everyXsecsForYsecs(theEnd, X, Y) {
  timer = setInterval(theEnd, X*1000);
  setTimeout(() => {
    clearInterval(timer)
  }, Y*1000);
}
function theEnd() {
console.log('This is the end!');
}
everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!