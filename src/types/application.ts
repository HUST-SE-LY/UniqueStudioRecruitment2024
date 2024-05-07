import type { SingleTime } from ".";

export interface Application {
  uid: string;
  created_at: string;
  updated_at: string;
  grade: string;
  institute: string;
  major: string;
  rank: string;
  group: string;
  intro: string;
  is_quick: boolean;
  referrer: string;
  resume: string;
  abandoned: boolean;
  rejected: boolean;
  step: string;
  candidate_id: string;
  recruitment_id: string;
  interview_allocations_group: SingleTime;
  interview_allocations_team: SingleTime;
  user_detail: null;
  interview_selections: SingleTime[];
  comments: null;
}

export type EditableInfo = Pick<
  Application,
  "grade" | "institute" | "major" | "rank" | "group" | "intro" | "referrer" | "is_quick"
>;

export type NecessaryInfo = Omit<
  EditableInfo,
  "referrer"
>;
