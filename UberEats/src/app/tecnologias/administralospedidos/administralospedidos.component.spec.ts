import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministralospedidosComponent } from './administralospedidos.component';

describe('AdministralospedidosComponent', () => {
  let component: AdministralospedidosComponent;
  let fixture: ComponentFixture<AdministralospedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministralospedidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministralospedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
