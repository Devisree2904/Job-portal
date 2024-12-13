package com.edubridge.job.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "job_applications")
public class JobApplication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long applicationId; 
    
    private String applicantName; 
    private String applicantEmail;  
    private Long applicantPhone;  
    private String resumePath;  


    @ManyToMany
    private List<Job> jobs;  // A job seeker can apply to many jobs.
 
}
