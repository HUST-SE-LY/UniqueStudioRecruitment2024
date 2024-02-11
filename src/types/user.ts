import type { SingleTime } from ".";

//ly: its easy to write type with ChatGPT :)
export interface User {
  uid: string;
  phone: string;
  email: string;
  name: string;
  avatar_url: string;
  gender: number;
  join_time: string;
  groups: null;
  lark_union_id: string;
  applications: Application[];
}

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
  interview_allocations_group: string;
  interview_allocations_team: string;
  user_detail: null;
  interview_selections: SingleTime[];
  comments: null;
}
