import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YavoydirectComponent } from './yavoydirect.component';

describe('YavoydirectComponent', () => {
  let component: YavoydirectComponent;
  let fixture: ComponentFixture<YavoydirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YavoydirectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YavoydirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
