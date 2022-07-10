import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidossincontactoComponent } from './pedidossincontacto.component';

describe('PedidossincontactoComponent', () => {
  let component: PedidossincontactoComponent;
  let fixture: ComponentFixture<PedidossincontactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidossincontactoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidossincontactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
