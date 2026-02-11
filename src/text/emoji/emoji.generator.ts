import type { Random } from '../../core/random.js';
import type { EmojiData } from '../../data/text-data.interface.js';

export interface EmojiModule {
  emoji(): string;
  emojis(count: number): string;
}

export function createEmoji(random: Random, data: EmojiData): EmojiModule {
  const all = [
    ...data.smileys,
    ...data.gestures,
    ...data.hearts,
    ...data.animals,
    ...data.food,
    ...data.nature,
    ...data.objects,
    ...data.flags,
    ...data.activities,
    ...data.travel,
  ];

  function emoji(): string {
    return random.pickOne(all);
  }

  function emojis(count: number): string {
    return random.pickMany(all, count).join(' ');
  }

  return { emoji, emojis };
}
