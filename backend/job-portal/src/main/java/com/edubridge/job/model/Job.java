package com.edubridge.job.model;

import java.util.List;

import java.util.Set;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "job")
public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long jobId; 

    private String jobTitle; 
    private String jobDescription;
    private String jobLocation; 
    private Double jobSalary;
    private String jobQualification;
    private String jobType;
  
    @ManyToMany  // This creates a foreign key 'employer_id'
    private List<JobEmployer> employer;  // Each job is linked to one employer
    
    @ManyToOne
	@JoinColumn(name="categoryId")
	private JobCategory category;

    @ManyToMany
    private List<JobApplication> jobApplications;  // A job can have many job applications applying.
}
