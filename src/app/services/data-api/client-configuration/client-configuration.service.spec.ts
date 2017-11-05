import { TestBed, inject } from '@angular/core/testing';

import { ClientConfigurationService } from './client-configuration.service';

describe('ClientConfigurationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientConfigurationService]
    });
  });

  it('should be created', inject([ClientConfigurationService], (service: ClientConfigurationService) => {
    expect(service).toBeTruthy();
  }));
});
