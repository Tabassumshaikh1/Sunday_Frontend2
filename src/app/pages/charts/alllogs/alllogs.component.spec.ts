import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlllogsComponent } from './alllogs.component';

describe('AlllogsComponent', () => {
  let component: AlllogsComponent;
  let fixture: ComponentFixture<AlllogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlllogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlllogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
