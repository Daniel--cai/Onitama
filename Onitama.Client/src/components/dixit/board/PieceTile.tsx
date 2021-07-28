/** @jsx jsx */
import { jsx } from 'theme-ui';
import * as styles from './Board.styles';

import React, { useEffect } from 'react';
import { useDrag } from 'react-dnd';
import { PieceType, Colour } from '../../../store/pieces/models';
import { useSelector } from 'react-redux';
import { State } from '../../../store';

export const PieceTile: React.FC<{
  type: PieceType;
  colour: Colour;
  id: number;
  onDrag: any;
}> = (props) => {
  const type = props.type === PieceType.Master;
  const card = useSelector<State, State['card']>((store) => store.card);

  const [{ isDragging }, drag] = useDrag({
    item: { type: props.id.toString() },
    canDrag: card.selected !== -1,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  });
  useEffect(() => {
    props.onDrag(isDragging, props.id);
  }, [isDragging]);
  return <div sx={styles.pieceCss(props.colour, type, isDragging)} ref={drag}></div>;
};
