import { TestBed } from '@angular/core/testing';

import { commentmakerService } from './commentmaker.service';

describe('CommentmakerService', () => {
  let service: commentmakerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(commentmakerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
