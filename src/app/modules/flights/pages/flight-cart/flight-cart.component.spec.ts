import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightCartComponent } from './flight-cart.component';

describe('FlightCartComponent', () => {
  let component: FlightCartComponent;
  let fixture: ComponentFixture<FlightCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
