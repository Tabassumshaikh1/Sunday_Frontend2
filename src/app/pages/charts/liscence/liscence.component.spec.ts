import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiscenceComponent } from './liscence.component';

describe('LiscenceComponent', () => {
  let component: LiscenceComponent;
  let fixture: ComponentFixture<LiscenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiscenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiscenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
