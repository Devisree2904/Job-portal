package com.edubridge.job.service;
import org.springframework.stereotype.Service;

import com.edubridge.job.model.JobApplication;
import com.edubridge.job.repo.JobApplicationRepository;

import java.util.List;

@Service
public class JobApplicationService {
    private final JobApplicationRepository jobApplicationRepository;

    public JobApplicationService(JobApplicationRepository jobApplicationRepository) {
        this.jobApplicationRepository = jobApplicationRepository;
    }

    public JobApplication getJobApplication(Long id) {
        return jobApplicationRepository.findById(id).orElse(null);
    }

    public List<JobApplication> getAllJobApplicationss() {
        return jobApplicationRepository.findAll();
    }

    public void saveJobApplication(JobApplication jobApplication) {
        jobApplicationRepository.save(jobApplication);
    }

    public void deleteJobApplication(Long id) {
        jobApplicationRepository.deleteById(id);
    }
}
