import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItenaryComponent } from './itenary.component';

describe('ItenaryComponent', () => {
  let component: ItenaryComponent;
  let fixture: ComponentFixture<ItenaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItenaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItenaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
