export class UserModel {
  constructor( public userId: number,
               public userName: string,
               public userEmailId: string,
               public userDob : string,
               public userContactNo:string,
               public userStatus:boolean,
               public userPassword:string
              ){}

}
