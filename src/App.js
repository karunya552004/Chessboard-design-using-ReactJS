import React from 'react';
import './App.css';
import { FaChessPawn, FaChessRook, FaChessKnight, FaChessBishop, FaChessKing, FaChessQueen } from "react-icons/fa";

function Chessboard() {
  return (
    <div className="App">
      <table>
        <tbody>
          <tr>
            <td className="white"><FaChessRook size={35} /></td>
            <td className="black"><FaChessKnight size={35} /></td>
            <td className="white"><FaChessBishop size={35} /></td>
            <td className="black"><FaChessKing size={35} /></td>
            <td className="white"><FaChessQueen size={35} /></td>
            <td className="black"><FaChessBishop size={35} /></td>
            <td className="white"><FaChessKnight size={35} /></td>
            <td className="black"><FaChessRook size={35} /></td>
          </tr>
          <tr>
            <td className="black"><FaChessPawn size={35} /></td>
            <td className="white"><FaChessPawn size={35} /></td>
            <td className="black"><FaChessPawn size={35} /></td>
            <td className="white"><FaChessPawn size={35} /></td>
            <td className="black"><FaChessPawn size={35} /></td>
            <td className="white"><FaChessPawn size={35} /></td>
            <td className="black"><FaChessPawn size={35} /></td>
            <td className="white"><FaChessPawn size={35} /></td>
          </tr>
          <tr>
            <td className="white"></td>
            <td className="black"></td>
            <td className="white"></td>
            <td className="black"></td>
            <td className="white"></td>
            <td className="black"></td>
            <td className="white"></td>
            <td className="black"></td>
          </tr>
          <tr>
            <td className="black"></td>
            <td className="white"></td>
            <td className="black"></td>
            <td className="white"></td>
            <td className="black"></td>
            <td className="white"></td>
            <td className="black"></td>
            <td className="white"></td>
          </tr>
          <tr>
            <td className="white"></td>
            <td className="black"></td>
            <td className="white"></td>
            <td className="black"></td>
            <td className="white"></td>
            <td className="black"></td>
            <td className="white"></td>
            <td className="black"></td>
          </tr>
          <tr>
            <td className="black"></td>
            <td className="white"></td>
            <td className="black"></td>
            <td className="white"></td>
            <td className="black"></td>
            <td className="white"></td>
            <td className="black"></td>
            <td className="white"></td>
          </tr>
          <tr>
            <td className="black"><FaChessPawn size={35} style={{ color: 'wheat' }} /></td>
            <td className="white"><FaChessPawn size={35} style={{ color: 'wheat' }} /></td>
            <td className="black"><FaChessPawn size={35} style={{ color: 'wheat' }} /></td>
            <td className="white"><FaChessPawn size={35} style={{ color: 'wheat' }} /></td>
            <td className="black"><FaChessPawn size={35} style={{ color: 'wheat' }} /></td>
            <td className="white"><FaChessPawn size={35} style={{ color: 'wheat' }} /></td>
            <td className="black"><FaChessPawn size={35} style={{ color: 'wheat' }} /></td>
            <td className="white"><FaChessPawn size={35} style={{ color: 'wheat' }} /></td>
          </tr>
          <tr>
            <td className="white"><FaChessRook size={35} style={{ color: 'wheat' }} /></td>
            <td className="black"><FaChessKnight size={35} style={{ color: 'wheat' }} /></td>
            <td className="white"><FaChessBishop size={35} style={{ color: 'wheat' }} /></td>
            <td className="black"><FaChessQueen size={35} style={{ color: 'wheat' }} /></td>
            <td className="white"><FaChessKing size={35} style={{ color: 'wheat' }} /></td>
            <td className="black"><FaChessBishop size={35} style={{ color: 'wheat' }} /></td>
            <td className="white"><FaChessKnight size={35} style={{ color: 'wheat' }} /></td>
            <td className="black"><FaChessRook size={35} style={{ color: 'wheat' }} /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Chessboard;
