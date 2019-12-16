import { users } from './users';
import { Mentors } from './mentor';
import { skill } from './skill';

export interface training
{
    id:number;
    user:users;
    mentor:Mentors;
    skill:skill;
    status:string;
	progress:number;
	rating:number;
	startDate:Date;
	endDate:Date;
}