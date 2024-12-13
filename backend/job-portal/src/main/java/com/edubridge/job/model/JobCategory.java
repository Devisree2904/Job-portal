package com.edubridge.job.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "job_category")
	public class JobCategory {
	
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long categoryId; 
	    private String jobCategoryName;   
	
}
