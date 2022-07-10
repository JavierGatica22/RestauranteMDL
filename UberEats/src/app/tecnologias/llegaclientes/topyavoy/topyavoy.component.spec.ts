import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopyavoyComponent } from './topyavoy.component';

describe('TopyavoyComponent', () => {
  let component: TopyavoyComponent;
  let fixture: ComponentFixture<TopyavoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopyavoyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopyavoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
