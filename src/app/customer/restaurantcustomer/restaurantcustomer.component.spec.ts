import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantcustomerComponent } from './restaurantcustomer.component';

describe('RestaurantcustomerComponent', () => {
  let component: RestaurantcustomerComponent;
  let fixture: ComponentFixture<RestaurantcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantcustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
