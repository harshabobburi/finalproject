export class UserMentorModel {
  constructor(public userId:number,
              public mentorId:number,
              public skillId:number,
              public userProposal:boolean,
              public mentorProposal:boolean,
              public userReconfirmProposal:boolean,
              public  userRating:number,
              public userProgress:number,
              public feedback:string){}
}
