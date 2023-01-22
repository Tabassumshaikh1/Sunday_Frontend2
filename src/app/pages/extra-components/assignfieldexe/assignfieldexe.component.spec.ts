import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignfieldexeComponent } from './assignfieldexe.component';

describe('AssignfieldexeComponent', () => {
  let component: AssignfieldexeComponent;
  let fixture: ComponentFixture<AssignfieldexeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignfieldexeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignfieldexeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
