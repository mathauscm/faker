import type { Random } from '../../core/random.js';
import type { WhatsappData } from '../../data/text-data.interface.js';

export interface WhatsappModule {
  casualMessage(): string;
  followupMessage(): string;
  confirmationMessage(): string;
}

export function createWhatsapp(random: Random, data: WhatsappData): WhatsappModule {
  return {
    casualMessage: () => random.pickOne(data.casual),
    followupMessage: () => random.pickOne(data.followup),
    confirmationMessage: () => random.pickOne(data.confirmation),
  };
}
