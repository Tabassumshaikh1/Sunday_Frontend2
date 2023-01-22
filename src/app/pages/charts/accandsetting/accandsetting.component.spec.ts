import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccandsettingComponent } from './accandsetting.component';

describe('AccandsettingComponent', () => {
  let component: AccandsettingComponent;
  let fixture: ComponentFixture<AccandsettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccandsettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccandsettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
