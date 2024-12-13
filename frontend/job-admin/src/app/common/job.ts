import { JobCategory } from "./job-category";

export class Job {
    jobId: number;
    jobTitle: string;
    jobDescription: string;
    jobLocation: string;
    jobSalary:number;
    jobQualification: number;
    jobType: string;
    category: JobCategory
}
