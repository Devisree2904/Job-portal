package com.edubridge.job.model;


import java.util.List;

import java.util.Set;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "employer")
public class JobEmployer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long employerId;

    private String employerName;
    private String employerEmail;
    private Long employerPassword;
    private Long employerMobile; 
    private String personalAddress;
    private String officeAddress;
    
    @OneToMany// Maps the 'employee' field in the 'Job' class
    private List<JobApplication> jobApplications;
    
    @ManyToMany
    private List<Job> jobs;
    
}
