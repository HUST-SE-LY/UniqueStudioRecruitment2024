import { writable } from "svelte/store";
import type { User } from "../types/user";

const createUserStore = () => {
  const initInfo = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) as User : null;
  const { set, subscribe } = writable<User>(initInfo);
  const setInfo = (info: User) => {
    set(info);
    localStorage.setItem("user", JSON.stringify(info));
  };
  return {
    subscribe,
    setInfo,
  };
};

export const userInfo = createUserStore();
