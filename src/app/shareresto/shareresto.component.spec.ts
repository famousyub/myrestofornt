import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharerestoComponent } from './shareresto.component';

describe('SharerestoComponent', () => {
  let component: SharerestoComponent;
  let fixture: ComponentFixture<SharerestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharerestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharerestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
