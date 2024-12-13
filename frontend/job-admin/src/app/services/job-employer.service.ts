import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { JobEmployer } from '../common/job-employer';

@Injectable({
  providedIn: 'root'
})
export class JobEmployerService {
  constructor(private http: HttpClient) { }

  getJobEmployers(){
    const url = 'http://localhost:8181/api/jobEmployers';
    return this.http
      .get<GetResponseJobEmployers>(url)
      .pipe(map((response) => response._embedded.jobEmployers));
  }
  
  createJobEmployer(jobEmployers: JobEmployer){
    const url = 'http://localhost:8181/api/jobEmployers';
    return this.http.post<JobEmployer>(url, jobEmployers);
  }
  deleteJobEmployer(id : number){
    const url = 'http://localhost:8181/api/jobEmployers/' + id;
    return this.http.delete<JobEmployer>(url);
  }

  getJobEmployer(id: number){
    const url = 'http://localhost:8181/api/jobEmployers/' + id;
    return this.http.get<JobEmployer>(url);
  }

  updateJobemployer(id: number, jobEmployers: JobEmployer){
    const url = 'http://localhost:8181/api/jobEmployers/' + id;
    return this.http.put<JobEmployer>(url, jobEmployers);
  }

}

interface GetResponseJobEmployers{
  _embedded: {
    jobEmployers: [];
  };
}

