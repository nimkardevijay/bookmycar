import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarCatalogComponent } from './car-catalog.component';

describe('CarCatalogComponent', () => {
  let component: CarCatalogComponent;
  let fixture: ComponentFixture<CarCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
