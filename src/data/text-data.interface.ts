export interface LoremData {
  words: string[];
  shortSentences: string[];
  longSentences: string[];
}

export interface MarketingData {
  headlines: string[];
  descriptions: string[];
  ctas: string[];
}

export interface SupportData {
  success: string[];
  error: string[];
  warning: string[];
  info: string[];
}

export interface WhatsappData {
  casual: string[];
  followup: string[];
  confirmation: string[];
}

export interface PersonData {
  maleFirstNames: string[];
  femaleFirstNames: string[];
  lastNames: string[];
  emailDomains: string[];
}

export interface EmojiData {
  smileys: string[];
  gestures: string[];
  hearts: string[];
  animals: string[];
  food: string[];
  nature: string[];
  objects: string[];
  flags: string[];
  activities: string[];
  travel: string[];
}

export interface TextData {
  lorem: LoremData;
  marketing: MarketingData;
  support: SupportData;
  whatsapp: WhatsappData;
  person: PersonData;
  emoji: EmojiData;
}
