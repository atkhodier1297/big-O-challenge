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