import React from 'react';
import Svg from 'components/common/Svg';
import { BoardImg } from 'svg';
import Piece from 'components/common/Piece';
import { PIECE } from 'types';

const Board: React.FC = () => (
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
        display: 'flex',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <Piece pieceName={'rB' as PIECE} />
      <Piece pieceName={'rB' as PIECE} />
    </div>
  </div>
);

export default Board;
