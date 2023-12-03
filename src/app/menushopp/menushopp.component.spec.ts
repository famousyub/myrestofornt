import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenushoppComponent } from './menushopp.component';

describe('MenushoppComponent', () => {
  let component: MenushoppComponent;
  let fixture: ComponentFixture<MenushoppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenushoppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenushoppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
