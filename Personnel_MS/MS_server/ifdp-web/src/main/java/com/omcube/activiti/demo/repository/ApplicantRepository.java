package com.omcube.activiti.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.omcube.activiti.demo.model.Applicant;

public interface ApplicantRepository extends JpaRepository<Applicant, Long> {

}