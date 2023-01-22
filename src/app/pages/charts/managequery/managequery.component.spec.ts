import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagequeryComponent } from './managequery.component';

describe('ManagequeryComponent', () => {
  let component: ManagequeryComponent;
  let fixture: ComponentFixture<ManagequeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagequeryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagequeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
