import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageliscenceComponent } from './manageliscence.component';

describe('ManageliscenceComponent', () => {
  let component: ManageliscenceComponent;
  let fixture: ComponentFixture<ManageliscenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageliscenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageliscenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
