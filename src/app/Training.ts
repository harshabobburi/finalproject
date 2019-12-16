import { USER } from './USER';
import { Mentor } from './Mentor';
import { Skill } from './Skill';

export interface Training {
    id: number;
    user: USER;
    mentor: Mentor;
    skill: Skill;
    status: string;
    progress: number;
    rating: number;
    startDate: Date;
    endDate: Date;
}