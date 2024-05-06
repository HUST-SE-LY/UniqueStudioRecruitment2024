import { derived } from "svelte/store";
import { t } from "./t";


export const parseTitle = derived(t, $t => {
  // 返回一个新的函数，这个函数将使用最新的 `t`
  return (title: string) => {
    try {
      return (
        title.slice(0, 4) +
        $t(`history.recruitmentName.${title[title.length - 1]}`)
      );
    } catch (_err) {
      return title.slice(0, 4) + "unknown recruitment";
    }
  };
});
