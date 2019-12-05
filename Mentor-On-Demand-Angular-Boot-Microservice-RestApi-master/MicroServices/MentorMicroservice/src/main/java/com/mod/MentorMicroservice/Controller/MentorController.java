package com.mod.MentorMicroservice.Controller;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mod.MentorMicroservice.Model.MentorModel;
import com.mod.MentorMicroservice.Service.MentorServiceInterface;

@RestController
@CrossOrigin(origins ="http://localhost:4200")
@RequestMapping("/mentor")
public class MentorController {
	
	@Autowired
	MentorServiceInterface mentorService;
	
	
	//Adding a new mentor
	@PostMapping("/addMentor")
	public ResponseEntity<MentorModel> registerMentor(@RequestBody MentorModel mentorData){
		if(mentorService.isMentorAlreadyExist(mentorData.getMentorEmail())) {
			return new ResponseEntity<MentorModel>(mentorData,HttpStatus.CONFLICT);
		}else {
			return new ResponseEntity<MentorModel>(mentorService.saveMentor(mentorData),HttpStatus.OK);
		}	
	}
	
	//authenticating a user
	@PostMapping("/login")
	public ResponseEntity<MentorModel> authenticateMentor(@RequestBody MentorModel mentorData) {
		MentorModel mentor = mentorService.mentorAuthenticate(mentorData.getMentorEmail(), mentorData.getMentorPassword());
		if(mentor!=null) {
			return new ResponseEntity<MentorModel>(mentor,HttpStatus.OK);
		}else {
			return new ResponseEntity<MentorModel>(mentorData,HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping("/mentors")
	public ResponseEntity<List<MentorModel>> getAllMentors(){
		return new ResponseEntity<List<MentorModel>>(mentorService.getAllMentors(),HttpStatus.OK);
	}
	
	@PatchMapping("/update")
	public ResponseEntity<MentorModel> updateProfile(@RequestBody MentorModel mentorData){
		return new ResponseEntity<MentorModel>(mentorService.saveMentor(mentorData),HttpStatus.OK);
	}
	
	@GetMapping("/mentor/{id}")
	public ResponseEntity<MentorModel> getMentorById(@PathVariable Long uId){
		MentorModel mentorData = mentorService.getMentorById(uId);
		if(mentorData!=null)
			return new ResponseEntity<MentorModel>(mentorData,HttpStatus.OK);
		else
			return new ResponseEntity<MentorModel>(mentorData,HttpStatus.NOT_FOUND);
	}
	
	@PostMapping("/mentorConnectionByUser")
	public ResponseEntity<List<MentorModel>> getMentorConnectionByUser(@RequestBody Long[] mentorIdData){
		List<MentorModel> mentorListByUserConnection = new ArrayList<MentorModel>();
		for(int i = 0;i<mentorIdData.length;i++) {
			mentorListByUserConnection.add(mentorService.getMentorById(mentorIdData[i]));
		}
		
			return new ResponseEntity<List<MentorModel>>(mentorListByUserConnection,HttpStatus.OK);
	}
}
