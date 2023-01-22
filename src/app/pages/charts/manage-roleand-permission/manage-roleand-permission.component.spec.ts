import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRoleandPermissionComponent } from './manage-roleand-permission.component';

describe('ManageRoleandPermissionComponent', () => {
  let component: ManageRoleandPermissionComponent;
  let fixture: ComponentFixture<ManageRoleandPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageRoleandPermissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRoleandPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
