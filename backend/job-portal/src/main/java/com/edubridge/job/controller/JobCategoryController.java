package com.edubridge.job.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.edubridge.job.model.Job;
import com.edubridge.job.service.JobCategoryService;
import com.edubridge.job.service.JobEmployerService;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class JobCategoryController {
	
	@Autowired
	private JobCategoryService jobCategoryService;
	/*
	http://localhost:8181/api/v1/category/1/jobs
	*/
	@PostMapping("/category/{categoryId}/jobs")
	public ResponseEntity<Job> addJobTocategory(
			@PathVariable Long  categoryId, @RequestBody Job job){
		
		jobCategoryService.addJobToCategory(categoryId, job);
		
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
