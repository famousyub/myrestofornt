import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YummyfoodComponent } from './yummyfood.component';

describe('YummyfoodComponent', () => {
  let component: YummyfoodComponent;
  let fixture: ComponentFixture<YummyfoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YummyfoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YummyfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
