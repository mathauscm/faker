import { Inject, Injectable } from '@nestjs/common';
import { Random, type RandomSource } from '../core/random.js';
import { loadTextData } from '../data/data-loader.js';
import { createLorem, type LoremModule } from './lorem/lorem.generator.js';
import { createMarketing, type MarketingModule } from './marketing/marketing.generator.js';
import { createSupport, type SupportModule } from './support/support.generator.js';
import { createWhatsapp, type WhatsappModule } from './whatsapp/whatsapp.generator.js';

export const FAKER_OPTIONS = Symbol('FAKER_OPTIONS');

export interface FakerModuleOptions {
  randomSource?: RandomSource;
}

@Injectable()
export class FakerService {
  private readonly _lorem: LoremModule;
  private readonly _marketing: MarketingModule;
  private readonly _support: SupportModule;
  private readonly _whatsapp: WhatsappModule;

  constructor(
    @Inject(FAKER_OPTIONS) options: FakerModuleOptions,
  ) {
    const random = new Random(options.randomSource);
    const data = loadTextData();

    this._lorem = createLorem(random, data.lorem);
    this._marketing = createMarketing(random, data.marketing);
    this._support = createSupport(random, data.support);
    this._whatsapp = createWhatsapp(random, data.whatsapp);
  }

  get lorem(): LoremModule {
    return this._lorem;
  }

  get marketing(): MarketingModule {
    return this._marketing;
  }

  get support(): SupportModule {
    return this._support;
  }

  get whatsapp(): WhatsappModule {
    return this._whatsapp;
  }
}
