// Get the value of the input
let gameWord = document.querySelector(`#input`);

// Set the starting value of gameWord to a random selection from this array
let gameWords = [
  `aā`,
  `āa`,
  `bb̄`,
  `b̄b`,
  `c̄c`,
  `d̄d`,
  `ēe`,
  `f̄f`,
  `ḡg`,
  `h̄h`,
  `īi`,
  `j̄j`,
  `k̄k`,
  `l̄l`,
  `m̄m`,
  `n̄n`,
  `ōo`,
  `p̄p`,
  `q̄q`,
  `r̄r`,
  `s̄s`,
  `t̄t`,
  `ūu`,
  `v̄v`,
  `w̄w`,
  `x̄x`,
  `ȳy`,
  `z̄z`,
];
gameWord.value = gameWords[Math.floor(Math.random() * gameWords.length)];

// Event listener for changes in the input field; runs on every keyup within the input field
document.querySelector(`#input`).addEventListener(`keyup`, function () {
  // updating the value of the gameWord on each keystroke
  gameWord = document.querySelector(`#input`).value;
  //   get the position of the cursor in the input
  let cursorPosition = document.querySelector(`#input`).selectionStart;
  // printing the value of the gameWord
  console.log(gameWord);
  //   printing the position of the cursor
  console.log(cursorPosition);
});
