import smallText from '../styles/smallText';

export const hidden = {
  ...smallText, 
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: '0.4s',
  opacity: 0,
  visibility: 'hidden',
};

export const visible = {...hidden, opacity: 1, visibility: 'visible'};
