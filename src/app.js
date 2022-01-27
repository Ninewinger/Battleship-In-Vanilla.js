window.onload = function() {


  //battleship game 9*9 on click on cell turn red if sunken part of a ship and blue if there miss
  const board = document.getElementById('shoots');
  const A1 = document.getElementById("A1");
  const A2 = document.getElementById("A2");
  const A3 = document.getElementById("A3");
  const A4 = document.getElementById("A4");
  const A5 = document.getElementById("A5");
  const A6 = document.getElementById("A6");
  const A7 = document.getElementById("A7");
  const A8 = document.getElementById("A8");
  const A9 = document.getElementById("A9");
  const B1 = document.getElementById("B1");
  const B2 = document.getElementById("B2");
  const B3 = document.getElementById("B3");
  const B4 = document.getElementById("B4");
  const B5 = document.getElementById("B5");
  const B6 = document.getElementById("B6");
  const B7 = document.getElementById("B7");
  const B8 = document.getElementById("B8");
  const B9 = document.getElementById("B9");
  const C1 = document.getElementById("C1");
  const C2 = document.getElementById("C2");
  const C3 = document.getElementById("C3");
  const C4 = document.getElementById("C4");
  const C5 = document.getElementById("C5");
  const C6 = document.getElementById("C6");
  const C7 = document.getElementById("C7");
  const C8 = document.getElementById("C8");
  const C9 = document.getElementById("C9");
  const D1 = document.getElementById("D1");
  const D2 = document.getElementById("D2");
  const D3 = document.getElementById("D3");
  const D4 = document.getElementById("D4");
  const D5 = document.getElementById("D5");
  const D6 = document.getElementById("D6");
  const D7 = document.getElementById("D7");
  const D8 = document.getElementById("D8");
  const D9 = document.getElementById("D9");
  const E1 = document.getElementById("E1");
  const E2 = document.getElementById("E2");
  const E3 = document.getElementById("E3");
  const E4 = document.getElementById("E4");
  const E5 = document.getElementById("E5");
  const E6 = document.getElementById("E6");
  const E7 = document.getElementById("E7");
  const E8 = document.getElementById("E8");
  const E9 = document.getElementById("E9");
  const F1 = document.getElementById("F1");
  const F2 = document.getElementById("F2");
  const F3 = document.getElementById("F3");
  const F4 = document.getElementById("F4");
  const F5 = document.getElementById("F5");
  const F6 = document.getElementById("F6");
  const F7 = document.getElementById("F7");
  const F8 = document.getElementById("F8");
  const F9 = document.getElementById("F9");
  const G1 = document.getElementById("G1");
  const G2 = document.getElementById("G2");
  const G3 = document.getElementById("G3");
  const G4 = document.getElementById("G4");
  const G5 = document.getElementById("G5");
  const G6 = document.getElementById("G6");
  const G7 = document.getElementById("G7");
  const G8 = document.getElementById("G8");
  const G9 = document.getElementById("G9");
  const H1 = document.getElementById("H1");
  const H2 = document.getElementById("H2");
  const H3 = document.getElementById("H3");
  const H4 = document.getElementById("H4");
  const H5 = document.getElementById("H5");
  const H6 = document.getElementById("H6");
  const H7 = document.getElementById("H7");
  const H8 = document.getElementById("H8");
  const H9 = document.getElementById("H9");
  const I1 = document.getElementById("I1");
  const I2 = document.getElementById("I2");
  const I3 = document.getElementById("I3");
  const I4 = document.getElementById("I4");
  const I5 = document.getElementById("I5");
  const I6 = document.getElementById("I6");
  const I7 = document.getElementById("I7");
  const I8 = document.getElementById("I8");
  const I9 = document.getElementById("I9");
  
  //generate an array of arrays with the coordinates of the ships randomly placed
  // 0 = empty
  // 1 = part of a ship
  // 2 = a sunken part of a ship
  // 3 = a missed shot
  function randomGameBoard(){
    let gameBoard = [
      ["", "A", "B", "C", "D", "E", "F", "G", "H", "I"],
      ["1",0,0,0,0,0,0,0,0,0],
      ["2",0,0,0,0,0,0,0,0,0],
      ["3",0,0,0,0,0,0,0,0,0],
      ["4",0,0,0,0,0,0,0,0,0],
      ["5",0,0,0,0,0,0,0,0,0],
      ["6",0,0,0,0,0,0,0,0,0],
      ["7",0,0,0,0,0,0,0,0,0],
      ["8",0,0,0,0,0,0,0,0,0],
      ["9",0,0,0,0,0,0,0,0,0]
    ];
    for(let i = 1; i < 10; i++){
      for(let j = 1; j < 10; j=j+3){
        if(Math.floor(Math.random()*100) < 7){
          gameBoard[i][j] = 1;
          gameBoard[i][j+1] = 1;
          gameBoard[i][j+2] = 1;
        }
        else{
          gameBoard[i][j] = 0;
        }
      }
    }
    for(let i = 1; i < 10; i=i+4){
      for(let j = 1; j < 10; j++){
        if(Math.floor(Math.random()*100) > 7 && Math.floor(Math.random()*100) < 14){
          gameBoard[i][j] = 1;
          gameBoard[i+1][j] = 1;
          gameBoard[i+2][j] = 1;
          gameBoard[i+3][j] = 1;
        }
        else{
          gameBoard[i][j] = 0;
        }
      }
    }
    return gameBoard;
  };

  let gameBoard = randomGameBoard();
  console.log(gameBoard);

  //show number of shoots (clicks) to win the game
  function showShips(){
    let shoots = 0;
    for(let i = 0; i < 10; i++){
      for(let j = 0; j < 10; j++){
        if(gameBoard[i][j] === 1){
          shoots++;
        }
      }
    }
    return shoots;    
  };    
  let ships = showShips();

  function letterToNumber(letter) {
    if(letter === "A") {
      return 1;
    } else if(letter === "B") {
      return 2;
    } else if(letter === "C") {
      return 3;
    } else if(letter === "D") {
      return 4;
    } else if(letter === "E") {
      return 5;
    } else if(letter === "F") {
      return 6;
    } else if(letter === "G") {
      return 7;
    } else if(letter === "H") {
      return 8;
    } else if(letter === "I") {
      return 9;
    }
  }

  function gameBoardId(id) {
    let lett = id.slice(0,1);
    let col = letterToNumber(lett);
    let row = id.slice(1,2);
    return gameBoard[col][row];
  }  
  let missed = 0;
  let hited = 0;

  //show the game board
  function showGameBoard(){
    board.innerHTML = "ships: " + ships + "  missed: " + missed + "  hited: " + hited;
  }
  showGameBoard();
  
  
  //for each cell add an event listener
  let cells = [A1, A2, A3, A4, A5, A6, A7, A8, A9, B1, B2, B3, B4, B5, B6, B7, B8, B9, C1, C2, C3, C4, C5, C6, C7, C8, C9, D1, D2, D3, D4, D5, D6, D7, D8, D9, E1, E2, E3, E4, E5, E6, E7, E8, E9, F1, F2, F3, F4, F5, F6, F7, F8, F9, G1, G2, G3, G4, G5, G6, G7, G8, G9, H1, H2, H3, H4, H5, H6, H7, H8, H9, I1, I2, I3, I4, I5, I6, I7, I8, I9]
  cells.forEach((e) => {
    e.addEventListener("click", (event) => {
      showGameBoard();
      let id = event.target.id;
      let cell = gameBoardId(id);      
      if(cell === 0) {
        event.target.className = "cellMiss";
        gameBoard[letterToNumber(id.slice(0,1))][id.slice(1,2)] = 3;
        missed++;
      } else if(cell === 1) {
        event.target.className = "cellHit";
        gameBoard[letterToNumber(id.slice(0,1))][id.slice(1,2)] = 2;
        hited++;
      }
      console.log(gameBoard);  
      console.log(hited, missed, ships);      
      if (hited === ships){
        alert("You won!");
      }
      
    });
  });

};
