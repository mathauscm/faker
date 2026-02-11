import { Random } from '../../core/random.js';
import { loadTextData } from '../../data/data-loader.js';
import { createEmoji } from './emoji.generator.js';

describe('EmojiGenerator', () => {
  const random = new Random(() => 0.5);
  const data = loadTextData();
  const emojiModule = createEmoji(random, data.emoji);

  const allEmojis = [
    ...data.emoji.smileys,
    ...data.emoji.gestures,
    ...data.emoji.hearts,
    ...data.emoji.animals,
    ...data.emoji.food,
    ...data.emoji.nature,
    ...data.emoji.objects,
    ...data.emoji.flags,
    ...data.emoji.activities,
    ...data.emoji.travel,
  ];

  it('should return a single emoji from the data', () => {
    const result = emojiModule.emoji();
    expect(allEmojis).toContain(result);
  });

  it('should return a string with the requested number of emojis', () => {
    const result = emojiModule.emojis(5);
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
  });
});
