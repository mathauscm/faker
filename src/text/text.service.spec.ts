import { Test, TestingModule } from '@nestjs/testing';
import { FAKER_OPTIONS, FakerService } from './text.service.js';

describe('FakerService', () => {
  let service: FakerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FakerService,
        {
          provide: FAKER_OPTIONS,
          useValue: { randomSource: () => 0.5 },
        },
      ],
    }).compile();

    service = module.get<FakerService>(FakerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should expose lorem module', () => {
    expect(service.lorem.sentence()).toBeTruthy();
  });

  it('should expose marketing module', () => {
    expect(service.marketing.headline()).toBeTruthy();
  });

  it('should expose support module', () => {
    expect(service.support.successMessage()).toBeTruthy();
  });

  it('should expose whatsapp module', () => {
    expect(service.whatsapp.casualMessage()).toBeTruthy();
  });
});
