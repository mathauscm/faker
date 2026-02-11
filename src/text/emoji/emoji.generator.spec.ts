import { Random } from '../../core/random.js';
import { loadTextData } from '../../data/data-loader.js';
import { createEmoji } from './emoji.generator.js';

describe('EmojiGenerator', () => {
  const random = new Random(() => 0.5);
  const data = loadTextData();
  const emoji = createEmoji(random, data.emoji);

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
    const result = emoji.emoji();
    expect(allEmojis).toContain(result);
  });

  it('should return the requested number of emojis', () => {
    const result = emoji.emojis(5);
    expect(result).toHaveLength(5);
    result.forEach((e) => {
      expect(allEmojis).toContain(e);
    });
  });

  it('should return an emoji via random()', () => {
    const result = emoji.random();
    expect(allEmojis).toContain(result);
  });

  it('random() should be an alias for emoji()', () => {
    const seeded = new Random(() => 0.3);
    const mod = createEmoji(seeded, data.emoji);
    const a = mod.emoji();
    const seeded2 = new Random(() => 0.3);
    const mod2 = createEmoji(seeded2, data.emoji);
    const b = mod2.random();
    expect(a).toBe(b);
  });
});
