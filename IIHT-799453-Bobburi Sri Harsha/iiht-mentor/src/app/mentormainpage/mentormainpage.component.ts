import { Component, OnInit } from '@angular/core';
import { TraningServiceService } from '../services/training-service.service';
import { training } from '../services/training';

@Component({
  selector: 'app-mentormainpage',
  templateUrl: './mentormainpage.component.html',
  styleUrls: ['./mentormainpage.component.css']
})
export class MentormainpageComponent implements OnInit {

  trainingList:any;

  constructor(private trainingService:TraningServiceService) { }

  ngOnInit() {
    this.getTrainingData();

  }

  getTrainingData() {
    this.trainingService.getIncompleteTrainingObservable().subscribe(
      (data)=>{
        this.trainingList = data;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  acceptRequest(training:training) {
    training.status = "Accepted";
    this.trainingService.saveStatusChangedTraining(training).subscribe(
      (data)=>{
        window.alert("Your Data has been saved");
        this.getTrainingData();
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  declineRequest(training:training){
    training.status = "Denied";
    this.trainingService.saveStatusChangedTraining(training).subscribe(
      (data)=>{
        window.alert("Your Data has been saved");
        this.getTrainingData();
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
