import type { Random } from '../../core/random.js';
import type { SupportData } from '../../data/text-data.interface.js';

export interface SupportModule {
  successMessage(): string;
  errorMessage(): string;
  warningMessage(): string;
  infoMessage(): string;
}

export function createSupport(random: Random, data: SupportData): SupportModule {
  return {
    successMessage: () => random.pickOne(data.success),
    errorMessage: () => random.pickOne(data.error),
    warningMessage: () => random.pickOne(data.warning),
    infoMessage: () => random.pickOne(data.info),
  };
}
