import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagossbComponent } from './pagossb.component';

describe('PagossbComponent', () => {
  let component: PagossbComponent;
  let fixture: ComponentFixture<PagossbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagossbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagossbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
