import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResencliComponent } from './resencli.component';

describe('ResencliComponent', () => {
  let component: ResencliComponent;
  let fixture: ComponentFixture<ResencliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResencliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResencliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
