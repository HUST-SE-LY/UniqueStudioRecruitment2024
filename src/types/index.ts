import {
  RANK,
  DEPARTMENTS,
  GENDERS,
  GRADE,
  TIMELINE,
  Period,
} from "../config/const";

export type Major = (typeof DEPARTMENTS)[keyof typeof DEPARTMENTS];

export type College = keyof typeof DEPARTMENTS;

export type Gender = (typeof GENDERS)[number];

export type Rank = (typeof RANK)[number];

export type Grade = (typeof GRADE)[number];

export type UserStep = (typeof TIMELINE)[number]["name"];

export type Periods = keyof typeof Period;

export type InterviewType = "team" | "group";

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
