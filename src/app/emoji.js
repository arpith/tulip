import EmojiConverter from 'emoji-js';
import missing from '../public/zulip_missing_emoji_names.json';

const emojiConverter = new EmojiConverter();
emojiConverter.addAliases(missing);

export function replaceColons(str) {
  try {
    return emojiConverter.replace_colons(str);
  } catch (err) {
    console.log("could not convert emoji", err);
    return str;
  }
}
