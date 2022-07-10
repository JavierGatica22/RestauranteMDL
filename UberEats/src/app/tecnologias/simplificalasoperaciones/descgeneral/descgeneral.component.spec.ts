import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescgeneralComponent } from './descgeneral.component';

describe('DescgeneralComponent', () => {
  let component: DescgeneralComponent;
  let fixture: ComponentFixture<DescgeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescgeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescgeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
