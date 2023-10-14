import { GROUPS, RANK, DEPARTMENTS, GENDERS, GRADE } from "../config/const";

export type Major = (typeof DEPARTMENTS)[keyof typeof DEPARTMENTS];

export type College = keyof typeof DEPARTMENTS;

export type Gender = (typeof GENDERS)[number];

export type Rank = (typeof RANK)[number];

export type Group = (typeof GROUPS)[number];

export type Grade = (typeof GRADE)[number];

export interface UserInfo {
  name: string;
  gender: Gender;
  rank: Rank;
  group: Group;
  college: College;
  major: Major;
  mail: string;
  introduction: string;
  grade: Grade;
}
