import { writable } from "svelte/store";
import type { Recruitment } from "../types/recruitment";
//ly: pending recruitment
const createRecruitmentStore = () => {
  const { set, subscribe } = writable<Recruitment>();
  const setRecruitments = (info: Recruitment) => {
    set(info);
  };
  return {
    subscribe,
    setRecruitments,
  };
};

export const recruitment = createRecruitmentStore();