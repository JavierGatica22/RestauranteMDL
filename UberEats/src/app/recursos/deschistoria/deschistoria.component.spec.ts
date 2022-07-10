import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeschistoriaComponent } from './deschistoria.component';

describe('DeschistoriaComponent', () => {
  let component: DeschistoriaComponent;
  let fixture: ComponentFixture<DeschistoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeschistoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeschistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
