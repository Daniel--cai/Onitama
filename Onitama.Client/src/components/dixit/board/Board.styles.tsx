import { SxStyleProp } from 'theme-ui';
import { Colour } from '../../../store/pieces/models';

export const boardCss: SxStyleProp = {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 4rem)',
  gridTemplateRows: 'repeat(5, 4rem)',
  width: '20rem',
  height: '20rem',
  margin: 'auto',
  border: '2px solid #ccc'
};

export const tileCss = (valid: boolean, isOver: boolean): SxStyleProp => {
  const css: SxStyleProp = {
    border: '2px solid',
    borderColor: 'charcoal-25',
    alignSelf: 'center',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  };
  if (valid) {
    css.backgroundColor = 'charcoal-25';
  }
  return css;
};

export const pieceCss = (
  color: Colour,
  master: boolean,
  isDragging: boolean
): SxStyleProp => {
  const css: SxStyleProp = {
    width: '0',
    height: '0',
    border: '15px solid',
    borderColor: 'crimson-100',
    color: 'white',
    borderWidth: '15px'
  };
  if (color === Colour.Blue) {
    css.borderColor = 'ocean-100';
    css[':hover'] = { cursor: 'pointer' };
  }
  if (master) {
    css.borderWidth = '25px';
  }
  if (isDragging) {
    css.visibility = 'hidden';
    css.cursor = 'pointer';
  }
  return css;
};
