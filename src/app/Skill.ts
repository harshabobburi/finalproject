export interface Skill {
    id: number;
    name: string;
    toc: string;
    prerequisite: Skill;
}