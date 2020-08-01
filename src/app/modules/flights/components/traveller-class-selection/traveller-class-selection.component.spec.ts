import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravellerClassSelectionComponent } from './traveller-class-selection.component';

describe('TravellerClassSelectionComponent', () => {
  let component: TravellerClassSelectionComponent;
  let fixture: ComponentFixture<TravellerClassSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravellerClassSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravellerClassSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
