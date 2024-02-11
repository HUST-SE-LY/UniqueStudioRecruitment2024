import {
  GROUPS,
  RANK,
  DEPARTMENTS,
  GENDERS,
  GRADE,
  TIMELINE,
} from "../config/const";

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

export type UserStep = (typeof TIMELINE)[number]["name"];

export type Periods = "morning" | "afternoon" | "evening";

export type InterviewType = "面试" | "群面";

export type TimeLineNode = {
  name: string;
  show?: boolean;
  info?: string;
};

export interface SingleTime {
  date: string;
  period: "morning" | "afternoon" | "evening";
  start: string;
  end: string;
  uid: string;
}

export type InterviewTime = {
  date: string;
  detail: {
    period: Periods;
    time: {
      startTime: string;
      endTime: string;
      uuid: string;
    }[];
  }[];
};
