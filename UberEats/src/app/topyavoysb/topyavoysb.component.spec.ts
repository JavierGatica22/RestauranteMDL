import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopyavoysbComponent } from './topyavoysb.component';

describe('TopyavoysbComponent', () => {
  let component: TopyavoysbComponent;
  let fixture: ComponentFixture<TopyavoysbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopyavoysbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopyavoysbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
