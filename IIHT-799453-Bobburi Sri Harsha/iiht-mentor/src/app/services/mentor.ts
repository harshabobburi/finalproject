import { users } from './users';

export interface Mentors
{
    id:number,
    linkedinUrl:string,
    yearsOfExperience:number,
    timeslot:string,
    user:users
}