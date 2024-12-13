import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { JobApplication } from '../common/job-application';

@Injectable({
  providedIn: 'root'
})
export class JobApplicationService {
  constructor(private http: HttpClient) { }

  getJobApplications(){
    const url = 'http://localhost:8181/api/jobApplications';
    return this.http
      .get<GetResponseJobApplications>(url)
      .pipe(map((response) => response._embedded.jobApplications));
  }
  
  createJobApplication(jobApplications: JobApplication){
    const url = 'http://localhost:8181/api/jobApplications';
    return this.http.post<JobApplication>(url, jobApplications);
  }
  deleteJobApplication(id : number){
    const url = 'http://localhost:8181/api/jobApplications/' + id;
    return this.http.delete<JobApplication>(url);
  }

  getJobApplication(id: number){
    const url = 'http://localhost:8181/api/jobApplications/' + id;
    return this.http.get<JobApplication>(url);
  }

  updateJobApplication(id: number, jobApplications: JobApplication){
    const url = 'http://localhost:8181/api/jobApplications/' + id;
    return this.http.put<JobApplication>(url, jobApplications);
  }

}

interface GetResponseJobApplications{
  _embedded: {
    jobApplications: [];
  };
}

