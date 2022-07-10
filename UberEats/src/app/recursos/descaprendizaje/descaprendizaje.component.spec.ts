import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescaprendizajeComponent } from './descaprendizaje.component';

describe('DescaprendizajeComponent', () => {
  let component: DescaprendizajeComponent;
  let fixture: ComponentFixture<DescaprendizajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescaprendizajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescaprendizajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
