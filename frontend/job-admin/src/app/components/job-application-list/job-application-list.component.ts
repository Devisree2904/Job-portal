import { Component } from '@angular/core';
import { JobApplication } from '../../common/job-application';
import { JobApplicationService } from '../../services/job-application.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-application-list',
  standalone: false,
  
  templateUrl: './job-application-list.component.html',
  styleUrl: './job-application-list.component.css'
})
export class JobApplicationListComponent {
  jobApplications: JobApplication[] = []


  constructor(
    private jobApplicationService: JobApplicationService,
    private router: Router
  ) { }


  listJobApplication(){
    this.jobApplicationService.getJobApplications().subscribe((data) => {
      this.jobApplications = data;
      console.log(data);
    });
  }
  ngOnInit(){
    this.listJobApplication();
  }

  removeApplication(id: number){
    if(confirm('Are you sure to delete?')){
      this.jobApplicationService
       .deleteJobApplication(id)
       .subscribe((data) => {
        alert('Application is removed!');
        this.listJobApplication();
      });
    }
  }

  showJobApplicationEdit(id: number){
    this.router.navigate(['job-application-edit', id]);
  }

}