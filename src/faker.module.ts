import { DynamicModule, Module } from '@nestjs/common';
import { FAKER_OPTIONS, FakerModuleOptions, FakerService } from './text/text.service.js';

@Module({})
export class FakerModule {
  static forRoot(options: FakerModuleOptions = {}): DynamicModule {
    return {
      module: FakerModule,
      global: true,
      providers: [
        {
          provide: FAKER_OPTIONS,
          useValue: options,
        },
        FakerService,
      ],
      exports: [FakerService],
    };
  }
}
