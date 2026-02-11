import { Random } from '../../core/random.js';
import { loadTextData } from '../../data/data-loader.js';
import { createPerson } from './person.generator.js';

describe('PersonGenerator', () => {
  const random = new Random(() => 0.5);
  const data = loadTextData();
  const person = createPerson(random, data.person);

  it('should return a first name from the data', () => {
    const result = person.firstName();
    const allNames = [...data.person.maleFirstNames, ...data.person.femaleFirstNames];
    expect(allNames).toContain(result);
  });

  it('should return a male first name when gender is male', () => {
    const result = person.firstName('male');
    expect(data.person.maleFirstNames).toContain(result);
  });

  it('should return a female first name when gender is female', () => {
    const result = person.firstName('female');
    expect(data.person.femaleFirstNames).toContain(result);
  });

  it('should return a last name from the data', () => {
    const result = person.lastName();
    expect(data.person.lastNames).toContain(result);
  });

  it('should return a full name with first and last name', () => {
    const result = person.fullName();
    const parts = result.split(' ');
    expect(parts.length).toBeGreaterThanOrEqual(2);
  });

  it('should return a valid email', () => {
    const result = person.email();
    expect(result).toMatch(/^[a-z]+\.[a-z]+@[\w.]+$/);
  });

  it('should use provided first and last name in email', () => {
    const result = person.email('João', 'Gonçalves');
    expect(result).toMatch(/^joao\.goncalves@/);
  });

  it('should return a valid username', () => {
    const result = person.username();
    expect(result).toMatch(/^[a-z]+[a-z]+\d+$/);
  });
});
