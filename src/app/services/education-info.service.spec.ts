import { TestBed } from '@angular/core/testing';

import { EducationInfoService } from './education-info.service';

describe('EducationInfoService', () => {
  let service: EducationInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducationInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
