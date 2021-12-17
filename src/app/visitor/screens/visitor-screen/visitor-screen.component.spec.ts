import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorScreenComponent } from './visitor-screen.component';

describe('VisitorScreenComponent', () => {
  let component: VisitorScreenComponent;
  let fixture: ComponentFixture<VisitorScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
