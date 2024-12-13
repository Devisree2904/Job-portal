import { Component } from '@angular/core';
import { JobCategory } from '../../common/job-category';
import { JobCategoryService } from '../../services/job-category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-category-list',
  standalone: false,
  
  templateUrl: './job-category-list.component.html',
  styleUrl: './job-category-list.component.css'
})
export class JobCategoryListComponent {
  jobCategories: JobCategory[] = []


  constructor(
    private jobCategoryService: JobCategoryService,
    private router: Router
  ) { }


  listJobCategory(){
    this.jobCategoryService.getJobCategories().subscribe((data) => {
      this.jobCategories = data;
      console.log(data);
    });
  }
  ngOnInit(){
    this.listJobCategory();
  }

  removeCategory(categoryId: number){
    if(confirm('Are you sure to delete?')){
      this.jobCategoryService
       .deleteJobCategory(categoryId)
       .subscribe((data) => {
        alert('Category is removed!');
        this.listJobCategory();
      });
    }
  }

  showJobCategoryEdit(categoryId: number){
    this.router.navigate(['job-category-edit', categoryId]);
  }

}