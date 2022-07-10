import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorariofiestasComponent } from './horariofiestas.component';

describe('HorariofiestasComponent', () => {
  let component: HorariofiestasComponent;
  let fixture: ComponentFixture<HorariofiestasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorariofiestasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorariofiestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
