import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobApplicationService } from '../../services/job-application.service';
import { Router } from '@angular/router';
import { JobApplication } from '../../common/job-application';

@Component({
  selector: 'app-job-application-create',
  standalone: false,
  
  templateUrl: './job-application-create.component.html',
  styleUrl: './job-application-create.component.css'
})
export class JobApplicationCreateComponent {
  applicationFormGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private jobApplicationService: JobApplicationService,
    private router: Router
  ) { }
  
  ngOnInit() {
    this.applicationFormGroup = this.formBuilder.group({
      application: this.formBuilder.group({
        applicantName: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
        applicantEmail: ['', [Validators.required]],
        applicantPhone: ['', [Validators.required]],
        resumePath: ['', [Validators.required]],
      }),
    });
  }

  get applicantName() {
    return this.applicationFormGroup.get('application.applicantName');

  }
  get applicantEmail() {
    return this.applicationFormGroup.get('application.applicantEmail');

  }
  get applicantPhone() {
    return this.applicationFormGroup.get('application.applicantPhone');

  } 
  
  get resumePath() {
    return this.applicationFormGroup.get('application.resumePath');

  }
  
  onSubmit() {
    if (this.applicationFormGroup.invalid) {
      this.applicationFormGroup.markAllAsTouched();
      alert('Invalid Form');
      return;
    }

    let jobApplication = new JobApplication();

    jobApplication = this.applicationFormGroup.controls['application'].value;


    this.jobApplicationService
      .createJobApplication(jobApplication)
      .subscribe((data) => {
        alert('New Application is added!');
        this.router.navigateByUrl('/job-application-list');
      });
  }

}
