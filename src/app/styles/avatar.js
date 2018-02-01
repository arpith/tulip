import { avatar, smallAvatar } from './dimensions';

export const wrapper = {
  display: 'flex',
  alignSelf: 'flex-start',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '1.2em',
  flexBasis: avatar,
};

export function img (isSmall = false) {
  const style = { borderRadius: '50%', height: avatar };
  if (isSmall === true) {
    style.height = smallAvatar;
  }
  return style;
};
