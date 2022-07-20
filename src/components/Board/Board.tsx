import React, { useState } from 'react';
import Svg from 'components/common/Svg';
import { BoardImg } from 'svg';
import Piece from 'components/common/Piece';
import { PIECE } from 'types';
import {
  calculateMove,
  COLUMN_LETTER,
  COLUMN_LETTER_STRING,
  rowExpansion,
} from './utils';

const Board: React.FC = () => {
  const [fen, setFen] = useState('4kaR2/4a4/3hR4/7H1/9/9/9/9/4Ap1r1/3AK3c');
  const [isInMove, setIsInMove] = useState(false);
  const [move, setMove] = useState('');

  const calculatePOS = (fenParam: string): React.ReactElement[] => {
    const arr: React.ReactElement[] = [];

    fenParam
      .split('/')
      .map(el => rowExpansion(el))
      .join('')
      .split('')
      .forEach((el, index) => {
        const column: COLUMN_LETTER_STRING = COLUMN_LETTER[
          index % 9
        ] as COLUMN_LETTER_STRING;

        if (!Number.isNaN(Number(el))) {
          arr.push(
            <div
              role="button"
              tabIndex={0}
              aria-label="square"
              key={`${column}${index / 9 + 1}`}
              onMouseDown={() => {
                if (isInMove) {
                  setFen(
                    calculateMove(fen, `${move} ${column}${index / 9 + 1}`),
                  );
                  setMove(``);
                  setIsInMove(false);
                }
              }}
            />,
          );
        } else {
          arr.push(
            <Piece
              key={`${column}${index / 9 + 1}`}
              pieceName={el as PIECE}
              onMouseDown={() => {
                console.log('test');
                if (isInMove) {
                  setFen(
                    calculateMove(fen, `${move} ${column}${index / 9 + 1}`),
                  );
                  setMove(``);
                  setIsInMove(false);
                } else {
                  setMove(`${column}${index / 9 + 1}`);
                  setIsInMove(true);
                }
              }}
            />,
          );
        }
      });

    return arr;
  };

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
