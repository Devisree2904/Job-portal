import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCategoryListComponent } from './job-category-list.component';

describe('JobCategoryListComponent', () => {
  let component: JobCategoryListComponent;
  let fixture: ComponentFixture<JobCategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobCategoryListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
