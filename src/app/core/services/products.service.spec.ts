import { async, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [],
      schemas: [],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.get(ProductsService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be getProducts', () => {
    service.getProducts();
  });

  it('should be getProducts', () => {
    service.getLaunchDetails();
  });

  it('should be getProducts', () => {
    service.getLandingDetails();
  });
});
