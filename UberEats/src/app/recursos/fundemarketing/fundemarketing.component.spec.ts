import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundemarketingComponent } from './fundemarketing.component';

describe('FundemarketingComponent', () => {
  let component: FundemarketingComponent;
  let fixture: ComponentFixture<FundemarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundemarketingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundemarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
