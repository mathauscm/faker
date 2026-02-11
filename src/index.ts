// Standalone
export { fakerBr, createFakerBr, type FakerBr } from './faker.js';

// NestJS
export { FakerModule } from './faker.module.js';
export { FakerService, type FakerModuleOptions } from './text/text.service.js';

// Types
export type { RandomSource } from './core/random.js';
export type { LoremModule } from './text/lorem/lorem.generator.js';
export type { MarketingModule } from './text/marketing/marketing.generator.js';
export type { SupportModule } from './text/support/support.generator.js';
export type { WhatsappModule } from './text/whatsapp/whatsapp.generator.js';
