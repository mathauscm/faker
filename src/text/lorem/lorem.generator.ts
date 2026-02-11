import type { Random } from '../../core/random.js';
import type { LoremData } from '../../data/text-data.interface.js';

export interface LoremModule {
  sentence(wordCount?: number): string;
  sentences(count?: number): string;
  paragraph(sentenceCount?: number): string;
  paragraphs(count?: number): string;
}

export function createLorem(random: Random, data: LoremData): LoremModule {
  function sentence(wordCount?: number): string {
    const count = wordCount ?? random.int(5, 12);
    const words = random.pickMany(data.words, count);
    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
    return words.join(' ') + '.';
  }

  function sentences(count?: number): string {
    const total = count ?? random.int(2, 5);
    const result: string[] = [];
    for (let i = 0; i < total; i++) {
      result.push(sentence());
    }
    return result.join(' ');
  }

  function paragraph(sentenceCount?: number): string {
    return sentences(sentenceCount ?? random.int(3, 6));
  }

  function paragraphs(count?: number): string {
    const total = count ?? random.int(2, 4);
    const result: string[] = [];
    for (let i = 0; i < total; i++) {
      result.push(paragraph());
    }
    return result.join('\n\n');
  }

  return { sentence, sentences, paragraph, paragraphs };
}
