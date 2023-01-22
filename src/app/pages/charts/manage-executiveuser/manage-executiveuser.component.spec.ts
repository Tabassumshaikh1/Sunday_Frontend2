import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageExecutiveuserComponent } from './manage-executiveuser.component';

describe('ManageExecutiveuserComponent', () => {
  let component: ManageExecutiveuserComponent;
  let fixture: ComponentFixture<ManageExecutiveuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageExecutiveuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageExecutiveuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
