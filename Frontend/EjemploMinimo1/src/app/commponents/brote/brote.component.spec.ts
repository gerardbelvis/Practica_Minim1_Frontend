import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroteComponent } from './brote.component';

describe('BroteComponent', () => {
  let component: BroteComponent;
  let fixture: ComponentFixture<BroteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BroteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BroteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
