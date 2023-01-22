import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastreqComponent } from './pastreq.component';

describe('PastreqComponent', () => {
  let component: PastreqComponent;
  let fixture: ComponentFixture<PastreqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastreqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
