import {  Mentors } from './mentor';
import { skill } from './skill';

export interface mentorskill
{
    mentor:Mentors,
    skill:skill,
    selfRating:number,
    yearsOfExperience:number
}