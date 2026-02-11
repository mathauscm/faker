import { Random } from './random.js';

describe('Random', () => {
  const deterministic = new Random(() => 0.5);

  describe('int', () => {
    it('should return an integer within range', () => {
      const result = deterministic.int(1, 10);
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(10);
    });

    it('should return min when source returns 0', () => {
      const random = new Random(() => 0);
      expect(random.int(5, 10)).toBe(5);
    });

    it('should return max when source returns ~1', () => {
      const random = new Random(() => 0.999);
      expect(random.int(5, 10)).toBe(10);
    });
  });

  describe('pickOne', () => {
    it('should return an element from the list', () => {
      const list = ['a', 'b', 'c'];
      const result = deterministic.pickOne(list);
      expect(list).toContain(result);
    });
  });

  describe('pickMany', () => {
    it('should return the requested number of elements', () => {
      const list = ['a', 'b', 'c', 'd', 'e'];
      const results = deterministic.pickMany(list, 3);
      expect(results).toHaveLength(3);
      results.forEach((r) => expect(list).toContain(r));
    });
  });
});
