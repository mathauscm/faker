import { Random, type RandomSource } from './core/random.js';
import { loadTextData } from './data/data-loader.js';
import { createLorem, type LoremModule } from './text/lorem/lorem.generator.js';
import { createMarketing, type MarketingModule } from './text/marketing/marketing.generator.js';
import { createSupport, type SupportModule } from './text/support/support.generator.js';
import { createWhatsapp, type WhatsappModule } from './text/whatsapp/whatsapp.generator.js';

export interface FakerPtBR {
  lorem: LoremModule;
  marketing: MarketingModule;
  support: SupportModule;
  whatsapp: WhatsappModule;
}

export function createFakerPtBR(randomSource?: RandomSource): FakerPtBR {
  const random = new Random(randomSource);
  const data = loadTextData();

  return {
    lorem: createLorem(random, data.lorem),
    marketing: createMarketing(random, data.marketing),
    support: createSupport(random, data.support),
    whatsapp: createWhatsapp(random, data.whatsapp),
  };
}

export const fakerPtBR = createFakerPtBR();
