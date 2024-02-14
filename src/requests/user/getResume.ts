import { download } from "../../utils/download";
import { http } from "../http";

export const getResume = async (aid: string) => {
  const res = await http.getRaw(`/applications/${aid}/resume`);
  const blob = await res.blob();
  download("个人简历", blob);
};
