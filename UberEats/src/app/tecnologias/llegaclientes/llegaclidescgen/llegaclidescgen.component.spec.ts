import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlegaclidescgenComponent } from './llegaclidescgen.component';

describe('LlegaclidescgenComponent', () => {
  let component: LlegaclidescgenComponent;
  let fixture: ComponentFixture<LlegaclidescgenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlegaclidescgenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LlegaclidescgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
