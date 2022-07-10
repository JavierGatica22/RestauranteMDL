import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppyavoyComponent } from './appyavoy.component';

describe('AppyavoyComponent', () => {
  let component: AppyavoyComponent;
  let fixture: ComponentFixture<AppyavoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppyavoyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppyavoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
