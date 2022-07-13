import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSatComponent } from './add-sat.component';

describe('AddSatComponent', () => {
  let component: AddSatComponent;
  let fixture: ComponentFixture<AddSatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
