import type { Random } from '../../core/random.js';
import type { MarketingData } from '../../data/text-data.interface.js';

export interface MarketingModule {
  headline(): string;
  description(): string;
  callToAction(): string;
}

export function createMarketing(random: Random, data: MarketingData): MarketingModule {
  return {
    headline: () => random.pickOne(data.headlines),
    description: () => random.pickOne(data.descriptions),
    callToAction: () => random.pickOne(data.ctas),
  };
}
