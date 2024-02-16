import { writable } from "svelte/store";
import type { Application, EditableInfo } from "../types/application";
import { produce } from "immer";

//ly: if we just use UserInfoStore, if we change data in  User Page, data in History Page will also change, so this store is just for User Page
const createLatestApplicationStore = () => {
  const initValue = localStorage.getItem("latest")
    ? (JSON.parse(localStorage.getItem("latest")) as Application)
    : null;
  const { set, subscribe, update } = writable<Application>(initValue);
  const setApplication = (info: Application) => {
    set(info);
    localStorage.setItem("latest", JSON.stringify(info));
  };
  const updateInfo = (info: EditableInfo) =>
    update((oldInfo) => {
      const newInfo = produce(oldInfo, (draft) => {
        Object.keys(info).forEach((key) => {
          key === "group"
            ? (draft[key] = info[key].toLowerCase())
            : (draft[key] = info[key]);
        });
      });
      localStorage.setItem("latest", JSON.stringify(newInfo));
      return newInfo;
    });
  return { subscribe, setApplication, updateInfo };
};

export const latestInfo = createLatestApplicationStore();
