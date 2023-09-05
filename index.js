function funChallenge(input) {
  let a = 10; //O(1)
  a = 50 + 3; //O(1)

  for (let i = 0; i < input.length; i++) { //O(n) n is the input
    anotherFunction(); //O(n) runs depending on how big input is
    let stranger = true; //O(n) runs depending on how big input is
    a++; //O(n) runs depending on how big input is
  }
  return a; //O(1)
}

// BIG O(3 + 4n) eventually simplified to just O(n)

funChallenge();
