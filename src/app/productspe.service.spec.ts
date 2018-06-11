
import { TestBed, inject } from '@angular/core/testing';

import { ProductSpeService } from './productspe.service';

describe('ProductSpeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductSpeService]
    });
  });

  it('should ...', inject([ProductSpeService], (service: ProductSpeService) => {
    expect(service).toBeTruthy();
  }));
});
