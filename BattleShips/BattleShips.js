var controller = {

}

function parseGuess (guess) {
  var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
  if (guess === null || guess.length !== 2) {
    alert ("Oops, please enter a letter and number on the board.")
  }
  else {
    firstChar = guess.charAt(0);
    var row = alphabet.indexOf(firstChar);
    var column = guess.charAt(1);
    if (isNaN (row) || isNaN (column)) {
      alert ("Oops, that is't on the board^(")
    } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
        alert ("Oops that is't board:(")
      } else {
        return row + column;
      }
    
  }
  return null;
}

var model = {
  boardSize: 7,
  numShips: 3,
  shipsLength: 3,
  shipSunk: 0,

  ships: [{locations: ["06", "16", "26"], hits: ["", "", ""]},
          {locations: ["24", "34", "44"], hits: ["", "", ""]},
          {locations: ["10", "11", "12"], hits: ["", "", ""]}],

  fire: function (guess) {
    for (var i = 0; i < this.numShips; i++) {
      ship = this.ships[i];
      locations = ship.locations;
      var index = locations.indexOf(guess);
      if (index >= 0) {
        ship.hits[index] = "hit";
        view.displayHit (guess);
        view.displayMessage ("HIT!!!");
        if (this.isSunk (ship)) {
          this.shipSunk++;
          view.displayMessage ("You sank my battleship!");

        }
        return true; 
      }
      
    }
    view.displayMiss (guess);
    view.displayMessage ("You missed:9");
    return false;
  },

  isSunk: function (ship) {
    for (var i = 0; i < this.shipslength; i++) {
      if (ship.hits[i] !== "hit") {
        return false;
      }
    }
    return true;
  }
}
/*
var receiverWindow = {
  corect: true,

  input: function () {

  },
  output: function () {

  }

}
*/
var view = {
  displayMessage: function (msg) {
    var messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = msg;
  },


  displayHit: function (location) {
    //if (location == location1) {
      var cell = document.getElementById (location);
      cell.setAttribute ("class", "hit");
    //}
  },

  displayMiss: function (location) {
    //if (location != location1) {
      var cell = document.getElementById (location);
      cell.setAttribute ("class", "miss");
    //}
  }

}

model.fire("06");
model.fire("16");
model.fire("44");
model.fire("50");
model.fire("12");
model.fire("11");
model.fire("33");
model.fire("24");


/*

var locShips = {
  //guessLoc: function () {

  //},

 
  location1: Math.floor(Math.random() * 65.5),
  location2: this.location1 + 1,
  location3: this.location2 + 1,
 
  
  linkRandlocWTdCells: function () {
    Link.inputCells [this.location1, this.location2, this.location3]

  }
}
locShips.linkRandlocWTdCells();
var linkRanWTd = locShips.linkRandlocWTdCells();

console.log (linkRanWTd)
console.log (locShips.location1);
  
var cellsLinkA;

var Link = {
  /*
  cellsA: ["A1", "A2", "A3", "A4", "A5", "A6", "A7"],
  cellsB: ["B1", "B2", "B3", "B4", "B5", "B6", "B7"],
  cellsC: ["C1", "C2", "C3", "C4", "C5", "C6", "C7"],
  cellsD: ["D1", "D2", "D3", "D4", "D5", "D6", "D7"],
  cellsE: ["E1", "E2", "E3", "E4", "E5", "E6", "E7"],
  cellsF: ["F1", "F2", "F3", "F4", "F5", "F6", "F7"],
  cellsG: ["G1", "G2", "G3", "G4", "G5", "G6", "G7"],
  *//*
  inputCellsA: [document.getElementById("00"), document.getElementById("01"), document.getElementById("02"), document.getElementById("03"), document.getElementById("04"), document.getElementById("05"), document.getElementById("06")],
  inputCellsB: [document.getElementById("10"), document.getElementById("11"), document.getElementById("12"), document.getElementById("13"), document.getElementById("14"), document.getElementById("15"), document.getElementById("16")],
  inputCellsC: [document.getElementById("20"), document.getElementById("21"), document.getElementById("22"), document.getElementById("23"), document.getElementById("24"), document.getElementById("25"), document.getElementById("26")],
  inputCellsD: [document.getElementById("30"), document.getElementById("31"), document.getElementById("32"), document.getElementById("33"), document.getElementById("34"), document.getElementById("35"), document.getElementById("36")],
  inputCellsE: [document.getElementById("40"), document.getElementById("41"), document.getElementById("42"), document.getElementById("43"), document.getElementById("44"), document.getElementById("45"), document.getElementById("46")],
  inputCellsF: [document.getElementById("50"), document.getElementById("51"), document.getElementById("52"), document.getElementById("53"), document.getElementById("54"), document.getElementById("55"), document.getElementById("56")],
  inputCellsG: [document.getElementById("60"), document.getElementById("61"), document.getElementById("62"), document.getElementById("63"), document.getElementById("64"), document.getElementById("65"), document.getElementById("66")],
  *//*
  inputCells: [document.getElementById("00"), document.getElementById("01"), document.getElementById("02"), document.getElementById("03"), document.getElementById("04"), document.getElementById("05"), document.getElementById("06"),
              document.getElementById("10"), document.getElementById("11"), document.getElementById("12"), document.getElementById("13"), document.getElementById("14"), document.getElementById("15"), document.getElementById("16"),
              document.getElementById("20"), document.getElementById("21"), document.getElementById("22"), document.getElementById("23"), document.getElementById("24"), document.getElementById("25"), document.getElementById("26"),
              document.getElementById("30"), document.getElementById("31"), document.getElementById("32"), document.getElementById("33"), document.getElementById("34"), document.getElementById("35"), document.getElementById("36"),
              document.getElementById("40"), document.getElementById("41"), document.getElementById("42"), document.getElementById("43"), document.getElementById("44"), document.getElementById("45"), document.getElementById("46"),
              document.getElementById("50"), document.getElementById("51"), document.getElementById("52"), document.getElementById("53"), document.getElementById("54"), document.getElementById("55"), document.getElementById("56"),
              document.getElementById("60"), document.getElementById("61"), document.getElementById("62"), document.getElementById("63"), document.getElementById("64"), document.getElementById("65"), document.getElementById("66")],

  cLink: function () {
    for (var i = 0; this.cellsA.length > i; i++) {
      var cellsLinkA = [this.cellsA[i] = this.inputCellsA[i]];
      var cellsLinkB = [this.cellsB[i] = this.inputCellsB[i]];
      var cellsLinkC = [this.cellsC[i] = this.inputCellsC[i]];
      var cellsLinkD = [this.cellsD[i] = this.inputCellsD[i]];
      var cellsLinkE = [this.cellsE[i] = this.inputCellsE[i]];
      var cellsLinkF = [this.cellsF[i] = this.inputCellsF[i]];
      var cellsLinkG = [this.cellsG[i] = this.inputCellsG[i]];
      console.log(i + cellsLinkA );
    }
    return cellsLinkA, cellsLinkB, cellsLinkC, cellsLinkD, cellsLinkE, cellsLinkF, cellsLinkG
  }
    
}
*/

//Link.cLink ();
//console.log(cellsLinkA);
/*
var battleShips = {
  loadGame: function () {
    if (guessLoc<0||guessLoc>66) {
      alert ("It's not corect!!!");
    }
    else if (guessLoc == location1 || guessLoc == location2 || guessLoc == location3) {
      alert ("Hit!!!");
    }
  }
}
*/

//locShips.randLoc();


