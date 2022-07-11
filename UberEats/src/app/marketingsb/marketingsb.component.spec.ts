import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingsbComponent } from './marketingsb.component';

describe('MarketingsbComponent', () => {
  let component: MarketingsbComponent;
  let fixture: ComponentFixture<MarketingsbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingsbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingsbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
