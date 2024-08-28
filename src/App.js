import "./styles.css";
import { useEffect, useState } from "react";
export default function App() {
  const n = 8;
  const m = 8;
  const [chessBoard, setChessBoard] = useState([]);
  const [pieces, setPieces] = useState([
    { type: "fa-chess-rook", position: [0, 0] }, 
    { type: "fa-chess-knight", position: [0, 1] }, 
  ]);

  useEffect(() => {
    const result = [];
    for (let i = 0; i < n; i++) {
      const row = Array.from({ length: m });
      result.push(row);
    }
    setChessBoard(result);
  }, []);

  return (
    <>
      {chessBoard.length > 0 && chessBoard.map((row, rIndex) => {
        return (
          <div className="row" key={rIndex}>
            {row.map((_, cIndex) => {
          
              const piece = pieces.find(p => p.position[0] === rIndex && p.position[1] === cIndex);
              return (
                <div
                  className={`box ${ (rIndex + cIndex) % 2 === 0 ? "black" : "white" }`}
                  key={cIndex}
                >
                  {piece && <i className={`fas ${piece.type}`}></i>}
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
}
