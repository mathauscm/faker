import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('lorem/sentence')
  getLoremSentence(): { text: string } {
    return { text: this.appService.getLoremSentence() };
  }

  @Get('lorem/paragraph')
  getLoremParagraph(): { text: string } {
    return { text: this.appService.getLoremParagraph() };
  }

  @Get('marketing/headline')
  getMarketingHeadline(): { text: string } {
    return { text: this.appService.getMarketingHeadline() };
  }

  @Get('marketing/description')
  getMarketingDescription(): { text: string } {
    return { text: this.appService.getMarketingDescription() };
  }

  @Get('marketing/cta')
  getMarketingCta(): { text: string } {
    return { text: this.appService.getMarketingCta() };
  }

  @Get('support/:type')
  getSupportMessage(@Param('type') type: 'success' | 'error' | 'warning' | 'info'): { text: string } {
    return { text: this.appService.getSupportMessage(type) };
  }

  @Get('whatsapp/:type')
  getWhatsappMessage(@Param('type') type: 'casual' | 'followup' | 'confirmation'): { text: string } {
    return { text: this.appService.getWhatsappMessage(type) };
  }
}
