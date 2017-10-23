import { TestBed, inject } from '@angular/core/testing';

import { ProgramConfigurationService } from './program-configuration.service';

describe('ProgramConfigurationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgramConfigurationService]
    });
  });

  it('should be created', inject([ProgramConfigurationService], (service: ProgramConfigurationService) => {
    expect(service).toBeTruthy();
  }));
});
