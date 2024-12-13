import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobEmployerService } from '../../services/job-employer.service';
import { Router } from '@angular/router';
import { JobEmployer } from '../../common/job-employer';

@Component({
  selector: 'app-job-employer-create',
  standalone: false,
  
  templateUrl: './job-employer-create.component.html',
  styleUrl: './job-employer-create.component.css'
})
export class JobEmployerCreateComponent {
  employerFormGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private jobEmployerService: JobEmployerService,
    private router: Router
  ) { }
  
  ngOnInit() {
    this.employerFormGroup = this.formBuilder.group({
      employer: this.formBuilder.group({
        employerName: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
        employerEmail: ['', [Validators.required]],
        employerPassword: ['', [Validators.required]],
        employerMobile: ['', [Validators.required]],
        personalAddress: ['', [Validators.required]],
        officeAddress: ['', [Validators.required]]
      }),
    });
  }

  get employerName() {
    return this.employerFormGroup.get('employer.employerName');

  }
  get employerEmail() {
    return this.employerFormGroup.get('employer.employerEmail');

  }
  get employerPassword() {
    return this.employerFormGroup.get('employer.employerPassword');

  }
  get employerMobile() {
    return this.employerFormGroup.get('employer.employerMobile');

  }
  get personalAddress() {
    return this.employerFormGroup.get('employer.personalAddress');

  }
  get officeAddress() {
    return this.employerFormGroup.get('employer.officeAddress');

  }

  onSubmit() {
    if (this.employerFormGroup.invalid) {
      this.employerFormGroup.markAllAsTouched();
      alert('Invalid Form');
      return;
    }

    let jobEmployer = new JobEmployer();

    jobEmployer = this.employerFormGroup.controls['employer'].value;


    this.jobEmployerService
      .createJobEmployer(jobEmployer)
      .subscribe((data) => {
        alert('New Employer is added!');
        this.router.navigateByUrl('/job-employer-list');
      });


  }

}
