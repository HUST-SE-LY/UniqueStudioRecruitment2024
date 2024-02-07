export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  const options = {
    weekday: "long" as const,
    month: "long" as const,
    day: "numeric" as const,
  };
  const locale = "zh-CN";

  const formattedDate = date.toLocaleDateString(locale, options);

  return formattedDate;
};




