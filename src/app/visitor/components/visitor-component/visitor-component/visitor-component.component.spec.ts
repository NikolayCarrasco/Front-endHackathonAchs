import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorComponentComponent } from './visitor-component.component';

describe('VisitorComponentComponent', () => {
  let component: VisitorComponentComponent;
  let fixture: ComponentFixture<VisitorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
