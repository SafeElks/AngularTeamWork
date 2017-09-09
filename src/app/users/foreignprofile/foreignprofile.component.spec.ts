import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignprofileComponent } from './foreignprofile.component';

describe('ForeignprofileComponent', () => {
  let component: ForeignprofileComponent;
  let fixture: ComponentFixture<ForeignprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForeignprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForeignprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
