import type { TextData } from './text-data.interface.js';
import lorem from './pt-br/lorem.json';
import marketing from './pt-br/marketing.json';
import support from './pt-br/support.json';
import whatsapp from './pt-br/whatsapp.json';

export function loadTextData(): TextData {
  return { lorem, marketing, support, whatsapp };
}
