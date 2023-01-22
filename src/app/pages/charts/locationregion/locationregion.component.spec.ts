import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationregionComponent } from './locationregion.component';

describe('LocationregionComponent', () => {
  let component: LocationregionComponent;
  let fixture: ComponentFixture<LocationregionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationregionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationregionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
