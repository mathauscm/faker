import { Random } from '../../core/random.js';
import { loadTextData } from '../../data/data-loader.js';
import { createLorem } from './lorem.generator.js';

describe('LoremGenerator', () => {
  const random = new Random(() => 0.5);
  const data = loadTextData();
  const lorem = createLorem(random, data.lorem);

  it('should generate a sentence ending with a period', () => {
    const result = lorem.sentence();
    expect(result).toMatch(/\.$/);
  });

  it('should return a pre-written sentence from the data', () => {
    const result = lorem.sentence();
    const allSentences = [...data.lorem.shortSentences, ...data.lorem.longSentences];
    expect(allSentences).toContain(result);
  });

  it('should generate multiple sentences', () => {
    const result = lorem.sentences(3);
    const sentences = result.split('. ').filter(Boolean);
    expect(sentences.length).toBeGreaterThanOrEqual(3);
  });

  it('should generate a paragraph', () => {
    const result = lorem.paragraph();
    expect(result.length).toBeGreaterThan(0);
    expect(result).toContain('.');
  });

  it('should generate multiple paragraphs separated by newlines', () => {
    const result = lorem.paragraphs(2);
    const paragraphs = result.split('\n\n');
    expect(paragraphs).toHaveLength(2);
  });
});
