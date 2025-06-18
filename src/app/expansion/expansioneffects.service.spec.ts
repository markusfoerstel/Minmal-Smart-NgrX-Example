import { TestBed } from '@angular/core/testing';

import { ExpansionEffectsService } from './expansioneffects.service';

describe('ExpansionEffectsService', () => {
  let service: ExpansionEffectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpansionEffectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
