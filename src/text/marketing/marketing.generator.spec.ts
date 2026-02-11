import { Random } from '../../core/random.js';
import { loadTextData } from '../../data/data-loader.js';
import { createMarketing } from './marketing.generator.js';

describe('MarketingGenerator', () => {
  const random = new Random(() => 0.5);
  const data = loadTextData();
  const marketing = createMarketing(random, data.marketing);

  it('should return a headline from the data', () => {
    const result = marketing.headline();
    expect(data.marketing.headlines).toContain(result);
  });

  it('should return a description from the data', () => {
    const result = marketing.description();
    expect(data.marketing.descriptions).toContain(result);
  });

  it('should return a CTA from the data', () => {
    const result = marketing.callToAction();
    expect(data.marketing.ctas).toContain(result);
  });
});
