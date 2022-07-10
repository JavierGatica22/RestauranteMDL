import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescgeneralventasComponent } from './descgeneralventas.component';

describe('DescgeneralventasComponent', () => {
  let component: DescgeneralventasComponent;
  let fixture: ComponentFixture<DescgeneralventasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescgeneralventasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescgeneralventasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
