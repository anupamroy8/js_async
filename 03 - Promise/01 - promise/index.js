// Challenge 1

function sayHello() {
  setTimeout( () => {
    console.log('hello')
  }, 1000)
}
sayHello(); // should log "Hello" after 1000ms


// Challenge 2
var promise = new Promise(function (resolve, reject) {
  setTimeout(()=> resolve("Resolved"), 1000)
});

promise.then (
  result => console.log(result),
  error => console.log(error)
)

// Should print out "Resolved!"

// Challenge 3

var promise = new Promise(function(resolve, reject) {
  reject("Rejected")
});

promise.catch (
  result => console.log(result),
  error => console.log(error)
)
// Should print out "Reject!"
// ADD CODE HERE


// Challenge 4

var promise = new Promise(function (resolve, reject) {
  setTimeout(()=> resolve("Resolved"), 1000)
});

promise.then(
  () => console.log('Promise has been resolved!'));
console.log("I'm not the promise!");

//"I'm not the promise!"" is printed first.
//Because the "call stack" will be executed first by "Event loop" before it reaches "message queue"(where 'Promise has been resolved!' is received from promise)

// Challenge 5
function delay(){
  var promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(), 1000);
  })
  return promise;
}
function sayHello() {
  console.log("Hello");
}
delay().then(sayHello);

// This code should log "Hello" after 1000ms

// Challenge 6

var secondPromise = new Promise((resolve, reject) => resolve("second!"));
var firstPromise = new Promise((resolve, reject) => resolve(secondPromise));
firstPromise.then(result => console.log(result))


// Challenge 7
const fakePeople = [
  { name: 'Rudolph', hasPets: false, currentTemp: 98.6 },
  { name: 'Zebulon', hasPets: true, currentTemp: 22.6 },
  { name: 'Harold', hasPets: true, currentTemp: 98.3 },
]

const fakeAPICall = (i) => {
  const returnTime = Math.floor(Math.random() * 1000);
  return new Promise((resolve, reject) => {
    if (i >= 0 && i < fakePeople.length) {
      setTimeout(() => resolve(fakePeople[i]), returnTime);
    } else {
      reject({ message: "index out of range" });
    }
  });
};

function getAllData() {
  var promise1 = new Promise((resolve, reject) => {
    resolve(fakeAPICall(0));
  });
  var promise2 = new Promise((resolve, reject) => {
    resolve(fakeAPICall(1));
  });
  var promise3 = new Promise((resolve, reject) => {
    resolve(fakeAPICall(2));
  });

  Promise.all([promise1, promise2, promise3]).then(value => console.log(value));
}
getAllData();