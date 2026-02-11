import { createFakerBr, fakerBr } from './faker.js';

describe('FakerBr', () => {
  describe('createFakerBr', () => {
    it('should create an instance with all modules', () => {
      const faker = createFakerBr(() => 0.5);
      expect(faker.lorem).toBeDefined();
      expect(faker.marketing).toBeDefined();
      expect(faker.support).toBeDefined();
      expect(faker.whatsapp).toBeDefined();
      expect(faker.person).toBeDefined();
    });

    it('should produce deterministic results with fixed source', () => {
      const faker1 = createFakerBr(() => 0.5);
      const faker2 = createFakerBr(() => 0.5);
      expect(faker1.lorem.sentence(5)).toBe(faker2.lorem.sentence(5));
      expect(faker1.marketing.headline()).toBe(faker2.marketing.headline());
    });
  });

  describe('fakerBr singleton', () => {
    it('should be a valid faker instance', () => {
      expect(fakerBr.lorem.sentence()).toBeTruthy();
      expect(fakerBr.marketing.headline()).toBeTruthy();
      expect(fakerBr.support.successMessage()).toBeTruthy();
      expect(fakerBr.whatsapp.casualMessage()).toBeTruthy();
      expect(fakerBr.person.firstName()).toBeTruthy();
    });
  });
});
