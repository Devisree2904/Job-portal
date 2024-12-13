import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobCategoryService } from '../../services/job-category.service';
import { Router } from '@angular/router';
import { JobCategory } from '../../common/job-category';

@Component({
  selector: 'app-job-category-create',
  standalone: false,
  
  templateUrl: './job-category-create.component.html',
  styleUrl: './job-category-create.component.css'
})
export class JobCategoryCreateComponent {
  categoryFormGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private jobCategoryService: JobCategoryService,
    private router: Router
  ) { }
  ngOnInit() {
    this.categoryFormGroup = this.formBuilder.group({
      category: this.formBuilder.group({
        jobCategoryName: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]]
      }),
    });
  }

  get jobCategoryName() {
    return this.categoryFormGroup.get('category.jobCategoryName');

  }
  onSubmit() {
    if (this.categoryFormGroup.invalid) {
      this.categoryFormGroup.markAllAsTouched();
      alert('Invalid Form');
      return;
    }

    let jobCategory = new JobCategory();

    jobCategory = this.categoryFormGroup.controls['category'].value;


    this.jobCategoryService
      .createJobCategory(jobCategory)
      .subscribe((data) => {
        alert('New category is added!');
        this.router.navigateByUrl('/job-category-list');
      });


  }

}

