import { Component } from '@angular/core';
import { JobEmployer } from '../../common/job-employer';
import { JobEmployerService } from '../../services/job-employer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-employer-list',
  standalone: false,
  
  templateUrl: './job-employer-list.component.html',
  styleUrl: './job-employer-list.component.css'
})
export class JobEmployerListComponent {
  jobEmployers: JobEmployer[] = []

  constructor(
    private jobEmployerService: JobEmployerService,
    private router: Router
  ){}

  listJobEmployer(){
    this.jobEmployerService.getJobEmployers().subscribe((data) => {
      this.jobEmployers = data;
      console.log(data);
    });
  }

  ngOnInit(){
    this.listJobEmployer();
  }

  
  removeEmployer(employerid: number){
    if(confirm('Are you sure to delete?')){
      this.jobEmployerService
       .deleteJobEmployer(employerid)
       .subscribe((data) => {
        alert('Employer is removed!');
        this.listJobEmployer();
      });
    }
  }

  showJobEmployerEdit(id: number){
    this.router.navigate(['job-employer-edit', id]);
  }

}
