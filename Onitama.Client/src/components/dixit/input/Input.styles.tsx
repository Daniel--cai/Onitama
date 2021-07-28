import { SxStyleProp } from 'theme-ui';

export const inputWrapperCss: SxStyleProp = {
  width: '100%'
};

export const inputCss: SxStyleProp = {
  border: '0',
  borderBottom: '2px solid',
  borderBottomColor: 'violet-50',
  borderTopLeftRadius: 'soft',
  borderTopRightRadius: 'soft',
  variant: 'text.body1',
  outline: 'none',
  backgroundColor: 'violet-10',
  color: 'charcoal-100',
  padding: 'md',
  width: '100%',
  display: 'block',
  textAlign: 'center',
  '::placeholder': {
    color: 'charcoal-50'
  },
  boxShadow: 'none',
  ':active': {
    borderBottomColor: 'violet-100'
  },
  ':focus': {
    borderBottomColor: 'violet-100'
  }
};
