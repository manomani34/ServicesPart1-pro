import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccuntComponent } from './add-accunt.component';

describe('AddAccuntComponent', () => {
  let component: AddAccuntComponent;
  let fixture: ComponentFixture<AddAccuntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAccuntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccuntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
