function funChallenge(input) {
  let a = 10; //O(1)
  a = 50 + 3; //O(1)

  for (let i = 0; i < input.length; i++) {
    //O(n) n is the input
    anotherFunction(); //O(n) runs depending on how big input is
    let stranger = true; //O(n) runs depending on how big input is
    a++; //O(n) runs depending on how big input is
  }
  return a; //O(1)
}

// BIG O(3 + 4n) eventually simplified to just O(n)

function anotherFunChallenge(input) {
  let a = 5; //O(1) assigning variables
  let b = 10; //O(1)
  let c = 50; //O(1)
  for (let i = 0; i < input; i++) {
    let x = i + 1; //O(n)
    let y = i + 2; //O(n)
    let z = i + 3; //O(n)
  }
  for (let j = 0; j < input; j++) {
    let p = j * 2; //O(n)
    let q = j * 2; //O(n)
  }
  let whoAmI = "I don't know"; //O(1)
}

// BIG O(4 + 5n) eventually simplified to just O(n)

// In interviews you will never have to calc the exact Big O but rather simplify them.
// Rules to Follow

// We drop the constants and only care about n if it's growing.
// O(n / 2 + 100) === O(n + 1) you can even drop the 1 and just leave it as O(n)
// if you had two separate loops making them both O(n) then it would be O(2n) simplified as O(n)
// we care more about how the line moves linearly as opposed to how steep it is
// ALWAYS DROP THE CONSTANTS

// Drop the dominants
function compressBoxTwice(boxes, boxesTwo) {
  boxes.forEach(function (boxes) {
    console.log(boxes);
  });
  // depends on first item

  boxesTwo.forEach(function (boxes) {
    console.log(boxes);
  });
  // depends on second item
}

// Different rules for different inputs boxes and boxesTwo are not the same
// Therefore O(n) is not the Big O of the above function
// The Big O is actually O(a + b) they are not looping over same items

//What to do in a nested loop situation

// Log all pairs of array
const boxes = ["a", "b", "c", "d", "e"];

function logAllPairs(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}

//logAllPairs(boxes);

// What is the Big O of something like this that has nested loops
// O(n * n) === O(n^2) Quadratic Time
// Line bends up and increases as the number of elements increases number of operations increases SIGNIFICANTLY
// Very complex compared to Linear Time and Constant Time

// Operations that are not nested is addition operations that are nested is multiplication
// If there was multiple arguments and nested loops then it would be O(a * b)

// last rule DROP NON DOMINANTS or Drop non dominant terms

function printAllNumsThenAllPairSums(numbers) {
  console.log("these are the numbers:");
  numbers.forEach(function (number) {
    console.log(number);
  });
  console.log("and these are their sums");
  numbers.forEach(function (firstNumber) {
    numbers.forEach(function (secondNumber) {
      console.log(firstNumber + secondNumber);
    });
  });
}

printAllNumsThenAllPairSums([1,2,3,4,5])

// O(n + n^2)
// Drop the non dominant n
// As size increases what will be most of important is n^2

// Another example O(x^2+3x+100+x/2)
// We care most about scale, even the above statement would be O(x^2)
// Remember if you had another nested loop it would be O(x^3)
// 99 percent of the time that is a terrible idea
// That would be a scale nightmare