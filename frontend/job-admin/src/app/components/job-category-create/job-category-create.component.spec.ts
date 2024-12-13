import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCategoryCreateComponent } from './job-category-create.component';

describe('JobCategoryCreateComponent', () => {
  let component: JobCategoryCreateComponent;
  let fixture: ComponentFixture<JobCategoryCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobCategoryCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobCategoryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
