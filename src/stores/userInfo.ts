import { writable } from "svelte/store";
import type { User } from "../types/user";
import type { EditableInfo } from "../types/application";
import { produce } from "immer";

const createUserStore = () => {
  const { set, subscribe, update } = writable<User>();
  const setInfo = (info: User) => {
    set(info);
  };
  const updateInfo = (newInfo: EditableInfo) =>
    update((prevInfo) =>
      produce<User>(prevInfo, (draft) => {
        Object.keys(newInfo).forEach((key) => {
          //ly: why group enum in backend can't be same with group enum in frontend?????WTF
          key === "group"
            ? (draft.applications[0][key] = newInfo[key].toLowerCase())
            : (draft.applications[0][key] = newInfo[key]);
        });
      })
    );

  return {
    subscribe,
    setInfo,
    updateInfo,
  };
};

export const userInfo = createUserStore();
