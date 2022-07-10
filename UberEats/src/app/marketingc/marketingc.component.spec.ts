import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingcComponent } from './marketingc.component';

describe('MarketingcComponent', () => {
  let component: MarketingcComponent;
  let fixture: ComponentFixture<MarketingcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
