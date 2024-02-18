import { RecruitmentName } from "../config/const";

export const parseTitle = (title: string) =>
  title.slice(0, 4) + RecruitmentName[title[title.length - 1]];
