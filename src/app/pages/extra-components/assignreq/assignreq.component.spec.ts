import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignreqComponent } from './assignreq.component';

describe('AssignreqComponent', () => {
  let component: AssignreqComponent;
  let fixture: ComponentFixture<AssignreqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignreqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
