import { Injectable } from '@nestjs/common';
import { FakerService } from './text/text.service.js';

@Injectable()
export class AppService {
  constructor(private readonly faker: FakerService) {}

  getLoremSentence(): string {
    return this.faker.lorem.sentence();
  }

  getLoremParagraph(): string {
    return this.faker.lorem.paragraph();
  }

  getMarketingHeadline(): string {
    return this.faker.marketing.headline();
  }

  getMarketingDescription(): string {
    return this.faker.marketing.description();
  }

  getMarketingCta(): string {
    return this.faker.marketing.callToAction();
  }

  getSupportMessage(type: 'success' | 'error' | 'warning' | 'info'): string {
    const methods = {
      success: () => this.faker.support.successMessage(),
      error: () => this.faker.support.errorMessage(),
      warning: () => this.faker.support.warningMessage(),
      info: () => this.faker.support.infoMessage(),
    };
    return methods[type]();
  }

  getWhatsappMessage(type: 'casual' | 'followup' | 'confirmation'): string {
    const methods = {
      casual: () => this.faker.whatsapp.casualMessage(),
      followup: () => this.faker.whatsapp.followupMessage(),
      confirmation: () => this.faker.whatsapp.confirmationMessage(),
    };
    return methods[type]();
  }
}
