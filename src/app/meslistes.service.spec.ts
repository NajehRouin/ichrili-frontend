import { TestBed, inject } from '@angular/core/testing';

import { MesListeService } from './meslistes.service';

describe('MesListeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MesListeService]
    });
  });

  it('should ...', inject([MesListeService], (service: MesListeService) => {
    expect(service).toBeTruthy();
  }));
});

