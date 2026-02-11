import type { Random } from '../../core/random.js';
import type { PersonData } from '../../data/text-data.interface.js';

export interface PersonModule {
  firstName(gender?: 'male' | 'female'): string;
  lastName(): string;
  fullName(gender?: 'male' | 'female'): string;
  email(firstName?: string, lastName?: string): string;
  username(): string;
}

function removeAccents(str: string): string {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export function createPerson(random: Random, data: PersonData): PersonModule {
  const pickFirstName = (gender?: 'male' | 'female'): string => {
    if (gender === 'male') return random.pickOne(data.maleFirstNames);
    if (gender === 'female') return random.pickOne(data.femaleFirstNames);
    return random.int(0, 1) === 0
      ? random.pickOne(data.maleFirstNames)
      : random.pickOne(data.femaleFirstNames);
  };

  return {
    firstName: (gender?) => pickFirstName(gender),

    lastName: () => random.pickOne(data.lastNames),

    fullName: (gender?) => {
      const first = pickFirstName(gender);
      const last = random.pickOne(data.lastNames);
      const hasDoubleLastName = random.int(0, 1) === 1;
      if (hasDoubleLastName) {
        const secondLast = random.pickOne(data.lastNames);
        return `${first} ${last} ${secondLast}`;
      }
      return `${first} ${last}`;
    },

    email: (firstName?, lastName?) => {
      const first = removeAccents(firstName ?? pickFirstName()).toLowerCase();
      const last = removeAccents(lastName ?? random.pickOne(data.lastNames)).toLowerCase();
      const domain = random.pickOne(data.emailDomains);
      return `${first}.${last}@${domain}`;
    },

    username: () => {
      const first = removeAccents(pickFirstName()).toLowerCase();
      const last = removeAccents(random.pickOne(data.lastNames)).toLowerCase();
      const num = random.int(1, 99);
      return `${first}${last}${num}`;
    },
  };
}
