import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobEmployerListComponent } from './job-employer-list.component';

describe('JobEmployerListComponent', () => {
  let component: JobEmployerListComponent;
  let fixture: ComponentFixture<JobEmployerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobEmployerListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobEmployerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
