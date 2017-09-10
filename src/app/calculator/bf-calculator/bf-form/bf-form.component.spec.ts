import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {BfFormComponent} from './bf-form.component';

describe('BfFormComponent', () => {
  let component: BfFormComponent;
  let fixture: ComponentFixture<BfFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BfFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BfFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
