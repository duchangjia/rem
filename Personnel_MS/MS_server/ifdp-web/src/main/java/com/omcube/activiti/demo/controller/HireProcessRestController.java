package com.omcube.activiti.demo.controller;

import org.activiti.engine.HistoryService;
import org.activiti.engine.RuntimeService;
import org.activiti.engine.TaskService;
import org.activiti.engine.runtime.ProcessInstance;
import org.activiti.engine.task.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import com.omcube.activiti.demo.model.Applicant;
import com.omcube.activiti.demo.repository.ApplicantRepository;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class HireProcessRestController {

	@Autowired
	private RuntimeService runtimeService;

	@Autowired
	private ApplicantRepository applicantRepository;

	@Autowired
	private TaskService taskService;

	@Autowired
	private HistoryService historyService;

	@ResponseStatus(value = HttpStatus.OK)
	@RequestMapping(value = "/start-hire-process", // allow all methods instead of: method = RequestMethod.POST,
			produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public String startHireProcess(@RequestParam String name, @RequestParam String email, @RequestParam String phoneNumber) {

		Applicant applicant = new Applicant(name, email, phoneNumber);
		applicantRepository.save(applicant);

		Map<String, Object> vars = Collections.<String, Object>singletonMap("applicant", applicant);
		runtimeService.startProcessInstanceByKey("hireProcessWithJpa", vars);
		return "success";
	}

	@ResponseStatus(value = HttpStatus.OK)
	@RequestMapping(value = "/pass-tel-interview", // allow all methods instead of: method = RequestMethod.POST,
			produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public String passTelInterview(@RequestParam String id) {
		Applicant applicant = applicantRepository.findOne(Long.parseLong(id));
		Map<String, Object> vars = Collections.<String, Object>singletonMap("applicant", applicant);
		ProcessInstance processInstance = runtimeService.startProcessInstanceByKey("hireProcessWithJpa", vars);
		Task task = taskService.createTaskQuery().processInstanceId(processInstance.getId())
				.taskCandidateGroup("dev-managers").singleResult();
		Map<String, Object> taskVariables = new HashMap<String, Object>();
		taskVariables.put("telephoneInterviewOutcome", true);
		taskService.complete(task.getId(), taskVariables);
		List<Task> tasks = taskService.createTaskQuery().processInstanceId(processInstance.getId()).orderByTaskName()
				.asc().list();
		System.out.println("task size: " + tasks.size());
		System.out.println("Financial negotiation" + tasks.get(0).getName());
		System.out.println("Tech interview" + tasks.get(1).getName());
		return "success";
	}

	@ResponseStatus(value = HttpStatus.OK)
	@RequestMapping(value = "/pass-fin-n-tech", // allow all methods instead of: method = RequestMethod.POST,
			produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public String passFinNTech(@RequestParam Long id) {
		Applicant applicant = applicantRepository.findOne(id);
		Map<String, Object> vars = Collections.<String, Object>singletonMap("applicant", applicant);
		ProcessInstance processInstance = runtimeService.startProcessInstanceByKey("hireProcessWithJpa", vars);
		List<Task> tasks = taskService.createTaskQuery().processInstanceId(processInstance.getId()).orderByTaskName()
				.asc().list();
		System.out.println("task size: " + tasks.size());
		System.out.println("Financial negotiation" + tasks.get(0).getName());
		System.out.println("Tech interview" + tasks.get(1).getName());

		Map<String, Object> taskVariables;
		taskVariables = new HashMap<String, Object>();
		taskVariables.put("techOk", true);
		taskService.complete(tasks.get(0).getId(), taskVariables);

		taskVariables = new HashMap<String, Object>();
		taskVariables.put("financialOk", true);
		taskService.complete(tasks.get(1).getId(), taskVariables);
		return "success";
	}

	@ResponseStatus(value = HttpStatus.OK)
	@RequestMapping(value = "/list-history", // allow all methods instead of: method = RequestMethod.POST,
			produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public String listHistory() {
		return historyService.createHistoricProcessInstanceQuery().finished().singleResult().toString();
	}

}