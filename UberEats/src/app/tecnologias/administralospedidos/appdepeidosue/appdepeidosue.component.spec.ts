import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppdepeidosueComponent } from './appdepeidosue.component';

describe('AppdepeidosueComponent', () => {
  let component: AppdepeidosueComponent;
  let fixture: ComponentFixture<AppdepeidosueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppdepeidosueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppdepeidosueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
