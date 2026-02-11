import { Random } from '../../core/random.js';
import { loadTextData } from '../../data/data-loader.js';
import { createSupport } from './support.generator.js';

describe('SupportGenerator', () => {
  const random = new Random(() => 0.5);
  const data = loadTextData();
  const support = createSupport(random, data.support);

  it('should return a success message from the data', () => {
    expect(data.support.success).toContain(support.successMessage());
  });

  it('should return an error message from the data', () => {
    expect(data.support.error).toContain(support.errorMessage());
  });

  it('should return a warning message from the data', () => {
    expect(data.support.warning).toContain(support.warningMessage());
  });

  it('should return an info message from the data', () => {
    expect(data.support.info).toContain(support.infoMessage());
  });
});
