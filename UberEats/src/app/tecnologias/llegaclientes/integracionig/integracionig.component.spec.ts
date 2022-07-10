import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegracionigComponent } from './integracionig.component';

describe('IntegracionigComponent', () => {
  let component: IntegracionigComponent;
  let fixture: ComponentFixture<IntegracionigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegracionigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegracionigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
