import React from 'react';
import Svg from 'components/common/Svg';
import * as PieceIcon from 'svg';
import { PIECE } from 'types';

interface Props {
  pieceName: PIECE;
}

const getIcon = (
  pieceName: PIECE,
):
  | React.FunctionComponent<
      React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
      }
    >
  | undefined => {
  switch (pieceName) {
    case PIECE.BlackAdvisor:
      return PieceIcon.blackAdvisor;
    case PIECE.BlackBishop:
      return PieceIcon.blackBishop;
    case PIECE.BlackCannon:
      return PieceIcon.blackCannon;
    case PIECE.BlackGeneral:
      return PieceIcon.blackGeneral;
    case PIECE.BlackHorse:
      return PieceIcon.blackHorse;
    case PIECE.BlackPawn:
      return PieceIcon.blackPawn;
    case PIECE.BlackChariot:
      return PieceIcon.blackChariot;
    case PIECE.RedAdvisor:
      return PieceIcon.redAdvisor;
    case PIECE.RedBishop:
      return PieceIcon.redBishop;
    case PIECE.RedCannon:
      return PieceIcon.redCannon;
    case PIECE.RedGeneral:
      return PieceIcon.redGeneral;
    case PIECE.RedHorse:
      return PieceIcon.redHorse;
    case PIECE.RedPawn:
      return PieceIcon.redPawn;
    case PIECE.redChariot:
      return PieceIcon.redChariot;
    default:
      return undefined;
  }
};

const Piece: React.FC<Props> = ({ pieceName }) => {
  const Icon = getIcon(pieceName);
  return <Svg Icon={Icon} />;
};

export default Piece;
