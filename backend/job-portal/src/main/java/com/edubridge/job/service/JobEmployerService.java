package com.edubridge.job.service;

import com.edubridge.job.model.JobEmployer;
import com.edubridge.job.repo.JobEmployerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JobEmployerService {

    @Autowired
    private JobEmployerRepository jobEmployerRepository;

    // Create or Update JobEmployer
    public JobEmployer saveJobEmployer(JobEmployer jobEmployer) {
        return jobEmployerRepository.save(jobEmployer);
    }

    // Get All JobEmployers
    public List<JobEmployer> getAllJobEmployers() {
        return jobEmployerRepository.findAll();
    }

    // Get JobEmployer by ID
    public Optional<JobEmployer> getJobEmployerById(Long id) {
        return jobEmployerRepository.findById(id);
    }

    // Delete JobEmployer by ID
    public void deleteJobEmployer(Long id) {
        jobEmployerRepository.deleteById(id);
    }
}
