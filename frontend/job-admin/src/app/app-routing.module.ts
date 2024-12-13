import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobListComponent } from './components/job-list/job-list.component';
import { JobCreateComponent } from './components/job-create/job-create.component';
import { JobEmployerCreateComponent } from './components/job-employer-create/job-employer-create.component';
import { JobEmployerListComponent } from './components/job-employer-list/job-employer-list.component';
import { JobCategoryCreateComponent } from './components/job-category-create/job-category-create.component';
import { JobCategoryListComponent } from './components/job-category-list/job-category-list.component';
import { JobApplicationCreateComponent } from './components/job-application-create/job-application-create.component';
import { JobApplicationListComponent } from './components/job-application-list/job-application-list.component';
import { SliderComponent } from './components/slider/slider.component';

const routes: Routes = [
  {path: 'job-list', component: JobListComponent},
  {path: 'job-create', component: JobCreateComponent},
  {path: 'job-employer-create', component: JobEmployerCreateComponent},
  {path: 'job-employer-list', component: JobEmployerListComponent},
  {path: 'job-category-create', component: JobCategoryCreateComponent},
  {path: 'job-category-list', component: JobCategoryListComponent},
  {path: 'job-application-create', component: JobApplicationCreateComponent},
  {path: 'job-application-list', component: JobApplicationListComponent},
  {path: '', component: SliderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
