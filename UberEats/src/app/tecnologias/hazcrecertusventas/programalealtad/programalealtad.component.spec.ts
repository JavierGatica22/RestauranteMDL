import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramalealtadComponent } from './programalealtad.component';

describe('ProgramalealtadComponent', () => {
  let component: ProgramalealtadComponent;
  let fixture: ComponentFixture<ProgramalealtadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramalealtadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramalealtadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
