// ly: shit functions aiming to switch ISO 8601 to daily expression
export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  const options = {
    weekday: "long" as const,
    month: "long" as const,
    day: "numeric" as const,
    timeZone: "Asia/Shanghai",
  };
  const locale = "zh-CN";
  const formattedDate = date.toLocaleDateString(locale, options);
  return formattedDate;
};

export const formatTime = (dateStr: string) => {
  const date = new Date(dateStr);
  const options = {
    hour: "numeric" as const,
    minute: "numeric" as const,
    timeZone: "Asia/Shanghai",
  };
  const locale = "zh-CN";

  const formattedDate = date.toLocaleTimeString(locale, options);

  return formattedDate;
};
