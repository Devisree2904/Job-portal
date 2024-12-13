import { Injectable } from "@angular/core";
import { Job } from "../common/job";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class JobService {
  /*
  http://localhost:8181/api/jobs */
 
  constructor(private http: HttpClient ) {}
//get all job deatails
getJobList(){
  const url = 'http://localhost:8181/api/jobs';
  return this.http
    .get<GetResponseJobs>(url)
    .pipe(map((response) => response._embedded.jobs));
}

//add job details
createJob(categoryId:number, job: Job){
  const url = "http://localhost:8181/api/v1/category/" + categoryId + "/jobs";
  return this.http.post<Job>(url, job);
}
}

interface GetResponseJobs {
_embedded: {
  jobs: Job[];
}
}

