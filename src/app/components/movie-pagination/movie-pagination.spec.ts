import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePagination } from './movie-pagination';

describe('MoviePagination', () => {
  let component: MoviePagination;
  let fixture: ComponentFixture<MoviePagination>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviePagination]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviePagination);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
