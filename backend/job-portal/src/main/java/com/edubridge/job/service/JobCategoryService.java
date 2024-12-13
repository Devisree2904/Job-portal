package com.edubridge.job.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.edubridge.job.repo.JobCategoryRepository;
import com.edubridge.job.repo.JobRepository;
import com.edubridge.job.model.Job;
import com.edubridge.job.model.JobCategory;

@Service
public class JobCategoryService {

    @Autowired
    private JobCategoryRepository jobCategoryRepository;
    
    @Autowired
    private JobRepository jobRepository;
    
    @Transactional
    public Job addJobToCategory(Long categoryId, Job job) {
        Optional<JobCategory> optional = jobCategoryRepository.findById(categoryId);
        
        if(optional.isPresent()) {
            JobCategory category = optional.get();
            job.setCategory(category); // Assuming the Job has a setter for Employee
            
            // Save the Job, which is now associated with the employee
            return jobRepository.save(job);
        } else {
            // Use a custom exception for better clarity
            throw new RuntimeException("category with ID " + categoryId + " not found");
        }
    }
}
