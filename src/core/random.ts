export type RandomSource = () => number;

export class Random {
  private readonly source: RandomSource;

  constructor(source: RandomSource = Math.random) {
    this.source = source;
  }

  int(min: number, max: number): number {
    return Math.floor(this.source() * (max - min + 1)) + min;
  }

  pickOne<T>(list: T[]): T {
    return list[this.int(0, list.length - 1)];
  }

  pickMany<T>(list: T[], count: number): T[] {
    const results: T[] = [];
    for (let i = 0; i < count; i++) {
      results.push(this.pickOne(list));
    }
    return results;
  }
}
