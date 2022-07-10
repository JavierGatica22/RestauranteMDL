import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendawebComponent } from './tiendaweb.component';

describe('TiendawebComponent', () => {
  let component: TiendawebComponent;
  let fixture: ComponentFixture<TiendawebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendawebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendawebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
