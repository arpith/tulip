import { avatar, smallAvatar } from './dimensions';

export function wrapper(size) {
  const style = {
    display: 'flex',
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '1.2em',
    flexBasis: avatar,
  };
  if (size === "small") {
    style.flexBasis = smallAvatar;
    style.marginRight = '1em';
  }
  return style;
}

export function img(size) {
  const style = { borderRadius: '50%', height: avatar };
  if (size === "small") {
    style.height = smallAvatar;
  }
  return style;
};
