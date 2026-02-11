import { Test, TestingModule } from '@nestjs/testing';
import { FakerModule } from './faker.module.js';
import { FakerService } from './text/text.service.js';

describe('FakerModule', () => {
  it('should provide FakerService via forRoot()', async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [FakerModule.forRoot()],
    }).compile();

    const service = module.get<FakerService>(FakerService);
    expect(service).toBeDefined();
    expect(service.lorem.sentence()).toBeTruthy();
  });

  it('should accept custom randomSource', async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [FakerModule.forRoot({ randomSource: () => 0.5 })],
    }).compile();

    const service = module.get<FakerService>(FakerService);
    const sentence1 = service.lorem.sentence(5);
    const sentence2 = service.lorem.sentence(5);
    expect(sentence1).toBe(sentence2);
  });
});
