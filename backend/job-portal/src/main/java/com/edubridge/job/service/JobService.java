package com.edubridge.job.service;
import org.springframework.stereotype.Service;

import com.edubridge.job.model.Job;
import com.edubridge.job.repo.JobRepository;

import java.util.List;
import java.util.Optional;

@Service
public class JobService {
    private final JobRepository jobRepository;

    public JobService(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    public Job getJob(Long id) {
        return jobRepository.findById(id).orElse(null);
    }

    public List<Job> getAllJobs() {
        return jobRepository.findAll();
    }

    public void saveJob(Job job) {
        jobRepository.save(job);
    }

    public void deleteJob(Long id) {
        jobRepository.deleteById(id);
    }
}
