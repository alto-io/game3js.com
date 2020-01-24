import React from 'react';
const Chess = require('react-chess')

// require('./demo.css')

function ChessDemo() {

  const [pieces, setPieces] = React.useState(Chess.getDefaultLineup());

  function handleMovePiece(piece, fromSquare, toSquare) {

    const newPieces = pieces
      .map((curr, index) => {
        if (piece.index === index) {
          return `${piece.name}@${toSquare}`
        } else if (curr.indexOf(toSquare) === 2) {
          return false // To be removed from the board
        }
        return curr
      })
      .filter(Boolean)

    setPieces(newPieces)
  }

  return (
    <div className="demo">
      <Chess pieces={pieces} onMovePiece={handleMovePiece} />
    </div>
  );
}


export default ChessDemo;
