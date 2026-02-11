import { createFakerPtBR, fakerPtBR } from './faker.js';

describe('FakerPtBR', () => {
  describe('createFakerPtBR', () => {
    it('should create an instance with all modules', () => {
      const faker = createFakerPtBR(() => 0.5);
      expect(faker.lorem).toBeDefined();
      expect(faker.marketing).toBeDefined();
      expect(faker.support).toBeDefined();
      expect(faker.whatsapp).toBeDefined();
    });

    it('should produce deterministic results with fixed source', () => {
      const faker1 = createFakerPtBR(() => 0.5);
      const faker2 = createFakerPtBR(() => 0.5);
      expect(faker1.lorem.sentence(5)).toBe(faker2.lorem.sentence(5));
      expect(faker1.marketing.headline()).toBe(faker2.marketing.headline());
    });
  });

  describe('fakerPtBR singleton', () => {
    it('should be a valid faker instance', () => {
      expect(fakerPtBR.lorem.sentence()).toBeTruthy();
      expect(fakerPtBR.marketing.headline()).toBeTruthy();
      expect(fakerPtBR.support.successMessage()).toBeTruthy();
      expect(fakerPtBR.whatsapp.casualMessage()).toBeTruthy();
    });
  });
});
