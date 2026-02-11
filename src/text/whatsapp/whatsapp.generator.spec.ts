import { Random } from '../../core/random.js';
import { loadTextData } from '../../data/data-loader.js';
import { createWhatsapp } from './whatsapp.generator.js';

describe('WhatsappGenerator', () => {
  const random = new Random(() => 0.5);
  const data = loadTextData();
  const whatsapp = createWhatsapp(random, data.whatsapp);

  it('should return a casual message from the data', () => {
    expect(data.whatsapp.casual).toContain(whatsapp.casualMessage());
  });

  it('should return a followup message from the data', () => {
    expect(data.whatsapp.followup).toContain(whatsapp.followupMessage());
  });

  it('should return a confirmation message from the data', () => {
    expect(data.whatsapp.confirmation).toContain(whatsapp.confirmationMessage());
  });
});
