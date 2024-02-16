import { NecessaryInfoTitle } from "../config/const";
import type { NecessaryInfo } from "../types/application";
import { Message } from "./Message";

export const checkNecessaryInfo = (info: NecessaryInfo) => {
  let ok = true;
  Object.keys(info).forEach((key) => {
    if(info[key].length === 0) {
      ok = false;
      Message.error(`请填写${NecessaryInfoTitle[key]}`);
    }
  });
  return ok;
};
