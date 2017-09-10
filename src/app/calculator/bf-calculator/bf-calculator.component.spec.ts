import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BfCalculatorComponent } from './bf-calculator.component';

describe('BfCalculatorComponent', () => {
  let component: BfCalculatorComponent;
  let fixture: ComponentFixture<BfCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BfCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BfCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
