import { TestBed } from '@angular/core/testing';

import { PersonListService } from './person-list.service';

describe('PersonListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonListService = TestBed.get(PersonListService);
    expect(service).toBeTruthy();
  });
});
