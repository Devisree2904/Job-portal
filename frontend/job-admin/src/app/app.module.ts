import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { provideHttpClient } from '@angular/common/http';
import { JobCreateComponent } from './components/job-create/job-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobEmployerListComponent } from './components/job-employer-list/job-employer-list.component';
import { JobEmployerCreateComponent } from './components/job-employer-create/job-employer-create.component';
import { JobCategoryListComponent } from './components/job-category-list/job-category-list.component';
import { JobCategoryCreateComponent } from './components/job-category-create/job-category-create.component';
import { JobApplicationCreateComponent } from './components/job-application-create/job-application-create.component';
import { JobApplicationListComponent } from './components/job-application-list/job-application-list.component';
import { SliderComponent } from './components/slider/slider.component';


@NgModule({
  declarations: [
    AppComponent,
    JobListComponent,
    JobCreateComponent,
    JobEmployerListComponent,
    JobEmployerCreateComponent,
    JobCategoryListComponent,
    JobCategoryCreateComponent,
    JobApplicationCreateComponent,
    JobApplicationListComponent,
    SliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
