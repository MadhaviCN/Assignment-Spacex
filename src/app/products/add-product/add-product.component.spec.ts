import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AddProductComponent } from './add-product.component';
import { ProductsService } from '../../core/services/products.service';

describe('AddProductComponent', () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddProductComponent],
      providers: [ProductsService],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = TestBed.createComponent(AddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
    await fixture.whenStable();
  });


  it('should be initialized', () => {
    expect(fixture).toBeDefined();
    expect(component).toBeDefined();
  });

  it('should call getProducts', () => {
    component.getProducts();
  });

  it('should call selectMission', () => {
    component.selectMission(2006);
  });

  it('should call launchSuccess', () => {
    component.launchSuccess(true);
  });

  it('should call launchSuccess false', () => {
    component.launchSuccess(false);
  });

  it('should call launchFailure', () => {
    component.launchFailure(false);
  });

  it('should call landingSuccess', () => {
    component.landingSuccess(true);
  });

  it('should call landingFailure', () => {
    component.landingFailure(false);
  });
});
