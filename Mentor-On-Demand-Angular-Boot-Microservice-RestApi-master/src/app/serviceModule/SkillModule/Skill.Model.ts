export class SkillModel {
constructor(public skillId:number,
            public mentorId:number,
            public skillName:string,
            public skillDuration:number,
            public videoMaterial:boolean,
            public notesMaterial:boolean,
            public liveVideos:boolean,
            public doubtSession:boolean){}
}
