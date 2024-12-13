import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { JobCategory } from '../common/job-category';

@Injectable({
  providedIn: 'root'
})
export class JobCategoryService {
  constructor(private http: HttpClient) { }

  getJobCategories(){
    const url = 'http://localhost:8181/api/jobCategories';
    return this.http
      .get<GetResponseJobCategories>(url)
      .pipe(map((response) => response._embedded.jobCategories));
  }
  
  createJobCategory(jobCategories: JobCategory){
    const url = 'http://localhost:8181/api/jobCategories';
    return this.http.post<JobCategory>(url, jobCategories);
  }
  deleteJobCategory(id : number){
    const url = 'http://localhost:8181/api/jobCategories/' + id;
    return this.http.delete<JobCategory>(url);
  }

  getJobCategory(id: number){
    const url = 'http://localhost:8181/api/jobCategories/' + id;
    return this.http.get<JobCategory>(url);
  }

  updateJobCategory(id: number, jobCategories: JobCategory){
    const url = 'http://localhost:8181/api/jobCategories/' + id;
    return this.http.put<JobCategory>(url, jobCategories);
  }

}

interface GetResponseJobCategories{
  _embedded: {
    jobCategories: [];
  };
}

