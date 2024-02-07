import type { Periods } from "../types";

export const transferPeriod = (period: Periods) => {
  switch (period) {
    case "afternoon":
      return "下午";
    case "morning":
      return "上午";
    case "evening":
      return "晚上";
  }
};
