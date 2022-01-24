/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { eventListeners } from "@popperjs/core";

window.onload = function() {
  //battleship game 9*9 on click on cell turn red if there is a ship and blue if there is no ship
  const cells = document.querySelectorAll(".cell");
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
  // 0 = empty
  // 1 = part of a ship
  // 2 = a sunken part of a ship
  // 3 = a missed shot
  let gameBoard = [
    ["","A","B","C","D","E","F","G","H","I"],
    ["1",1,1,1,1,1,0,0,0,0,1],
    ["2",0,0,0,0,0,0,0,0,0,1],
    ["3",0,0,0,0,0,0,0,0,0,1],
    ["4",0,0,0,0,0,0,0,0,0,1],
    ["5",0,0,0,0,0,0,0,0,0,0],
    ["6",1,0,0,1,1,0,0,0,0,0],
    ["7",1,0,0,0,0,0,0,0,0,0],
    ["8",1,0,0,0,0,0,0,0,0,0],
    ["9",1,1,1,1,0,0,0,0,0,0]
    

  ];

  //if a cell is clicked, change the class to cellHit or cellMiss depending on the value of the gameBoard
  function gameBoardHit(cell) {
    if (gameBoard[cell.id[0]][cell.id[1]] === 1) {
      cell.className = "cellHit";
    } else if (gameBoard[cell.id[0]][cell.id[1]] === 0) {
      cell.className = "cellMiss";
    }
  }


  function fire() {
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
    let cell = document.getElementById(x + y);
    if (gameBoard[y][x] === 1) {
      cell.style.backgroundColor = "red";
      gameBoard[y][x] = 2;
    } else if (gameBoard[y][x] === 0) {
      cell.style.backgroundColor = "blue";
      gameBoard[y][x] = 3
  }
}

  console.log("Hello Rigo from the console!");
};
