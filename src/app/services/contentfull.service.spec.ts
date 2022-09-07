import { TestBed } from '@angular/core/testing';

import { ContentfullService } from './contentfull.service';

describe('ContentfullService', () => {
  let service: ContentfullService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentfullService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
