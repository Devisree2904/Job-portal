import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobEmployerCreateComponent } from './job-employer-create.component';

describe('JobEmployerCreateComponent', () => {
  let component: JobEmployerCreateComponent;
  let fixture: ComponentFixture<JobEmployerCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobEmployerCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobEmployerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
