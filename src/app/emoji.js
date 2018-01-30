import EmojiConverter from 'emoji-js';
import aliases from '../public/zulip_emoji_names.json';

const emojiConverter = new EmojiConverter();
emojiConverter.addAliases(aliases);

export function replaceColons(str) {
  try {
    return emojiConverter.replace_colons(str);
  } catch (err) {
    console.log("could not convert emoji", err);
    return str;
  }
}
