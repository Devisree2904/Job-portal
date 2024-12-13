import { Component } from '@angular/core';
import { Job } from '../../common/job';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-job-list',
  standalone: false,
  
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent {
  jobs: Job[] = [];

  constructor(private jobService: JobService){ }
  
      listJobs(){
       this.jobService.getJobList().subscribe((data) => {
       this.jobs= data;
       console.log(data);
    });
  }

  ngOnInit(){
    this.listJobs();
  }
}
