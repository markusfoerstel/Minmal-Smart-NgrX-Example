import { TestBed } from '@angular/core/testing';

import { EncounterEffectsService } from './instanceeffects.service';

describe('EncounterEffectsService', () => {
  let service: EncounterEffectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncounterEffectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
