import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripciongeneralComponent } from './descripciongeneral.component';

describe('DescripciongeneralComponent', () => {
  let component: DescripciongeneralComponent;
  let fixture: ComponentFixture<DescripciongeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescripciongeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripciongeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
