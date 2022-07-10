import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogaprendizajeComponent } from './blogaprendizaje.component';

describe('BlogaprendizajeComponent', () => {
  let component: BlogaprendizajeComponent;
  let fixture: ComponentFixture<BlogaprendizajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogaprendizajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogaprendizajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
