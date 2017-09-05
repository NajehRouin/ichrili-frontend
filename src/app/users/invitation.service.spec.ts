import { TestBed, inject } from '@angular/core/testing';

import { InvitationService } from './invitation.service';

describe('InvitationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InvitationService]
    });
  });

  it('should ...', inject([InvitationService], (service: InvitationService) => {
    expect(service).toBeTruthy();
  }));
});
