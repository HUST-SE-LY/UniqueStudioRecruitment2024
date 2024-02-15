import { writable } from "svelte/store";
import type { User } from "../types/user";
import type { EditableInfo } from "../types/application";
import { produce } from "immer";

const createUserStore = () => {
  const initInfo = localStorage.getItem("user")
    ? (JSON.parse(localStorage.getItem("user")) as User)
    : null;
  const { set, subscribe, update } = writable<User>(initInfo);
  const setInfo = (info: User) => {
    set(info);
    localStorage.setItem("user", JSON.stringify(info));
  };
  const updateInfo = (newInfo: EditableInfo) =>
    update((prevInfo) => {
      const info = produce<User>(prevInfo, (draft) => {
        Object.keys(newInfo).forEach((key) => {
          //ly: why group enum in backend can't be same with group enum in frontend?????WTF
          key === "group"
            ? (draft.applications[0][key] = newInfo[key].toLowerCase())
            : (draft.applications[0][key] = newInfo[key]);
        });
      });
      localStorage.setItem("user", JSON.stringify(info));
      return info;
    });

  return {
    subscribe,
    setInfo,
    updateInfo,
  };
};

export const userInfo = createUserStore();
