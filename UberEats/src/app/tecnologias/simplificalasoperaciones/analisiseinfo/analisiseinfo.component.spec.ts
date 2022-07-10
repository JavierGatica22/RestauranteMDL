import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisiseinfoComponent } from './analisiseinfo.component';

describe('AnalisiseinfoComponent', () => {
  let component: AnalisiseinfoComponent;
  let fixture: ComponentFixture<AnalisiseinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalisiseinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalisiseinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
