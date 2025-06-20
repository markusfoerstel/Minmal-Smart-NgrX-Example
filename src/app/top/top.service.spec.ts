import { TestBed } from '@angular/core/testing';
import { TopEffectsService } from './top.service';


describe('TopEffectsService', () => {
  let service: TopEffectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopEffectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
