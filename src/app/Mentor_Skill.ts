import { Mentor } from './Mentor';
import { Skill } from './Skill';

export interface Mentor_Skill {
    mentor: Mentor,
    skill: Skill,
    selfRating: number,
    yearsOfExperience: number
}