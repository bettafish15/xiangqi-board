import React, { useState } from 'react';
import Svg from 'components/common/Svg';
import { BoardImg } from 'svg';
import Piece from 'components/common/Piece';
import { PIECE } from 'types';

const calculatePOS = (fen: string): React.ReactElement[] => {
  let index = -1;
  const arr: React.ReactElement[] = [];

  fen
    .split('/')
    .join('')
    .split('')
    .forEach(el => {
      if (!Number.isNaN(Number(el))) {
        const numberOfEmptyDiv = Number(el);
        [...Array(numberOfEmptyDiv)].forEach(_ => {
          arr.push(<div key={index} />);
          index += 1;
        });
      } else {
        arr.push(<Piece key={index} pieceName={el as PIECE} />);
        index += 1;
      }
    });

  return arr;
};

const Board: React.FC = () => {
  const [fen] = useState('4kaR2/4a4/3hR4/7H1/9/9/9/9/4Ap1r1/3AK3c');

  return (
    <div
      className="Board"
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        width: '400px',
      }}
    >
      <Svg Icon={BoardImg} />
      <div
        style={{
          position: 'absolute',
          display: 'grid',
          gridTemplateColumns: 'repeat(9, 1fr)',
          gridTemplateRows: 'repeat(10, 1fr)',
          borderSpacing: '0px',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        {calculatePOS(fen).map(el => {
          return el;
        })}
      </div>
    </div>
  );
};

export default Board;
