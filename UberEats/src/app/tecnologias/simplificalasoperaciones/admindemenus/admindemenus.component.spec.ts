import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindemenusComponent } from './admindemenus.component';

describe('AdmindemenusComponent', () => {
  let component: AdmindemenusComponent;
  let fixture: ComponentFixture<AdmindemenusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindemenusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindemenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
