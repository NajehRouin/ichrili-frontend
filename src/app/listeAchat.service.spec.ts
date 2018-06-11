
import { TestBed, inject } from '@angular/core/testing';

import { ListeAchatService } from './listeAchat.service';

describe('ListeAchatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListeAchatService]
    });
  });

  it('should ...', inject([ListeAchatService], (service: ListeAchatService) => {
    expect(service).toBeTruthy();
  }));
});

