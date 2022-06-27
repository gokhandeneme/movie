import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMovieComponent } from './about-movie.component';

describe('AboutMovieComponent', () => {
  let component: AboutMovieComponent;
  let fixture: ComponentFixture<AboutMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
