import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoshoppComponent } from './restoshopp.component';

describe('RestoshoppComponent', () => {
  let component: RestoshoppComponent;
  let fixture: ComponentFixture<RestoshoppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestoshoppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoshoppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
