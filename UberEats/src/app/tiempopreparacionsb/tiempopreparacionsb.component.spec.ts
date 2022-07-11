import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiempopreparacionsbComponent } from './tiempopreparacionsb.component';

describe('TiempopreparacionsbComponent', () => {
  let component: TiempopreparacionsbComponent;
  let fixture: ComponentFixture<TiempopreparacionsbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiempopreparacionsbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiempopreparacionsbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
