import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainInfoComponent } from './bf-form.component';

describe('MainInfoComponent', () => {
  let component: MainInfoComponent;
  let fixture: ComponentFixture<MainInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});