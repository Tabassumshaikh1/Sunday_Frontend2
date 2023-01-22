import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierservComponent } from './courierserv.component';

describe('CourierservComponent', () => {
  let component: CourierservComponent;
  let fixture: ComponentFixture<CourierservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourierservComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourierservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
