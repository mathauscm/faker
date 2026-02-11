import { Random, type RandomSource } from './core/random.js';
import { loadTextData } from './data/data-loader.js';
import { createLorem, type LoremModule } from './text/lorem/lorem.generator.js';
import { createMarketing, type MarketingModule } from './text/marketing/marketing.generator.js';
import { createSupport, type SupportModule } from './text/support/support.generator.js';
import { createWhatsapp, type WhatsappModule } from './text/whatsapp/whatsapp.generator.js';
import { createPerson, type PersonModule } from './text/person/person.generator.js';
import { createEmoji, type EmojiModule } from './text/emoji/emoji.generator.js';

export interface FakerBr {
  lorem: LoremModule;
  marketing: MarketingModule;
  support: SupportModule;
  whatsapp: WhatsappModule;
  person: PersonModule;
  emoji(): string;
  emojis(count: number): string;
}

export function createFakerBr(randomSource?: RandomSource): FakerBr {
  const random = new Random(randomSource);
  const data = loadTextData();
  const emojiModule = createEmoji(random, data.emoji);

  return {
    lorem: createLorem(random, data.lorem),
    marketing: createMarketing(random, data.marketing),
    support: createSupport(random, data.support),
    whatsapp: createWhatsapp(random, data.whatsapp),
    person: createPerson(random, data.person),
    emoji: emojiModule.emoji,
    emojis: emojiModule.emojis,
  };
}

export const fakerBr = createFakerBr();
