import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobService } from '../../services/job.service';
import { Router } from '@angular/router';
import { JobEmployerService } from '../../services/job-employer.service';
import { Job } from '../../common/job';
import { JobEmployer } from '../../common/job-employer';
import { JobCategory } from '../../common/job-category';
import { JobCategoryService } from '../../services/job-category.service';

@Component({
  selector: 'app-job-create',
  standalone: false,
  
  templateUrl: './job-create.component.html',
  styleUrl: './job-create.component.css'
})
export class JobCreateComponent {
  jobFormGroup: FormGroup
  jobCategories: JobCategory[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private jobService: JobService,
    private jobCategoryService: JobCategoryService,
    private router: Router
  ){}

  ngOnInit(){
    this.jobFormGroup = this.formBuilder.group({
      job: this.formBuilder.group({
        jobTitle: ['', [Validators.required]],
        jobDescription: ['', [Validators.required]],
        jobLocation: ['', [Validators.required]],
        jobSalary: ['', [Validators.required]],
        jobQualification: ['', [Validators.required]],
        jobType: ['', [Validators.required]],
        category: ['', [Validators.required]],
      }),
    });
    
  this.listJobCategories();
  }

  get jobTitle() {
    return this.jobFormGroup.get('job.jobTitle');
  }

  get jobDescription() {
    return this.jobFormGroup.get('job.jobDescription');
  }

  get jobLocation() {
    return this.jobFormGroup.get('job.jobLocation');
  }

  get jobSalary() {
    return this.jobFormGroup.get('job.jobSalary');
  }

  get jobQualification() {
    return this.jobFormGroup.get('job.jobQualification');
  }

  get jobType() {
    return this.jobFormGroup.get('job.jobType');
  }

  get category() {
    return this.jobFormGroup.get('job.category');
  }

  listJobCategories(){
    this.jobCategoryService.getJobCategories().subscribe((data) => {
      this.jobCategories = data;
    });
  }

  onSubmit(){
    if(this.jobFormGroup.invalid){
      this.jobFormGroup.markAllAsTouched();
      alert('Invalid Form');
      return;
    }

    

    //if form is valid
    let job = new Job();
    job = this.jobFormGroup.controls['job'].value;
    console.log(job);
    console.log(job.category.categoryId);
    console.log(job.category.jobCategoryName);

    /*
    //job object validations
    if (job.category.catogoryId === undefined || job.category.catogoryId === null) {
      console.error('categoryId is undefined or null');
      return; 
      
      // Avoid making the API request
    }
*/
    this.jobService
    .createJob(job.category.categoryId,job)
    .subscribe((data) =>{
      alert('New job is added!');
      this.router.navigateByUrl('/job-list');
    });
  }
}
