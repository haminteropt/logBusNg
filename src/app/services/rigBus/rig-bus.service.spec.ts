import { TestBed, inject } from '@angular/core/testing';

import { RigBusService } from './rig-bus.service';

describe('RigBusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RigBusService]
    });
  });

  it('should be created', inject([RigBusService], (service: RigBusService) => {
    expect(service).toBeTruthy();
  }));
});
