import React from "react";
import { useState } from "react";

function Board() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [move, setMove] = useState("X");

  const handleClick = (i) => {
    console.log(i);
    let square = [...board];

    if (board[i] != "") {
      alert("Already Clicked");
      return;
    }

    square[i] = move;
    setBoard(square);

    if (move === "X") {
      setMove("O");
    } else {
      setMove("X");
    }

    if (checkWinner(square)) {
      alert("Winner");
      square.fill("");
      setBoard(square);
    }

    if (checkDraw(square)) {
      alert("Match Draw");
      square.fill("");
      setBoard(square);
    }
  };

  const checkDraw = (board) => {
    let count = 0;

    board.forEach((element) => {
      if (element != "") {
        count++;
      }
    });

    if (count >= 9) {
      return true;
    } else {
      return false;
    }
  };

  const checkWinner = (board) => {
    let conditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let flag = false;
    conditions.forEach((element) => {
      if (
        board[element[0]] != "" &&
        board[element[1]] != "" &&
        board[element[2]] != ""
      ) {
        if (
          board[element[0]] === board[element[1]] &&
          board[element[1]] === board[element[2]]
        ) {
          flag = true;
        }
      }
    });
    return flag;
  };

  return (
    <>
      <h1 className="text-center">Tic Tac Toe</h1>
      <table className="bg-info m-auto w-50 text-center mb-2">
        <tr className="bg-warning">
          <td
            style={{ height: "200px", width: "200px" }}
            className="border border-dark"
            onClick={() => handleClick(0)}
          >
            <h2>{board[0]}</h2>
          </td>
          <td
            style={{ height: "200px", width: "200px" }}
            className="border border-dark"
            onClick={() => handleClick(1)}
          >
            <h2>{board[1]}</h2>
          </td>
          <td
            style={{ height: "200px", width: "200px" }}
            className="border border-dark"
            onClick={() => handleClick(2)}
          >
            <h2>{board[2]}</h2>
          </td>
        </tr>
        <tr className="bg-warning">
          <td
            style={{ height: "200px", width: "200px" }}
            className="border border-dark"
            onClick={() => handleClick(3)}
          >
            <h2>{board[3]}</h2>
          </td>
          <td
            style={{ height: "200px", width: "200px" }}
            className="border border-dark"
            onClick={() => handleClick(4)}
          >
            <h2>{board[4]}</h2>
          </td>
          <td
            style={{ height: "200px", width: "200px" }}
            className="border border-dark"
            onClick={() => handleClick(5)}
          >
            <h2>{board[5]}</h2>
          </td>
        </tr>
        <tr className="bg-warning">
          <td
            style={{ height: "200px", width: "200px" }}
            className="border border-dark"
            onClick={() => handleClick(6)}
          >
            <h2>{board[6]}</h2>
          </td>
          <td
            style={{ height: "200px", width: "200px" }}
            className="border border-dark"
            onClick={() => handleClick(7)}
          >
            <h2>{board[7]}</h2>
          </td>
          <td
            style={{ height: "200px", width: "200px" }}
            className="border border-dark"
            onClick={() => handleClick(8)}
          >
            <h2>{board[8]}</h2>
          </td>
        </tr>
      </table>
    </>
  );
}

export default Board;
