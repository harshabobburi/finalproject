export interface users
{

    id:number,
    userName:string,
    password:string,
    firstName:string,
    lastName:string,
    contactNumber:number,
    regCode?:string,
    role:string,
    linkedinUrl:string,
    yearsOfExperience:number,
    active?:boolean,
    confirmedSignUp?:boolean,
    resetPassword?:boolean,
    resetPasswordDate?:Date

}