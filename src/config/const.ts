export const LANGUAGES = {
  "zh-CN": "简体中文",
  "en-US": "English",
} as const;

export const ProcessState = {
  OUT: "已淘汰",
  PROCESSING: "进行中",
  PASS: "已通过",
  OVER: "已结束",
} as const;

export const ProcessStateEN = {
  OUT: "OUT",
  PROCESSING: "ONGOING",
  PASS: "PASS",
  OVER: "OVER",
  ABANDONED: "ABANDONED",
} as const;

export enum GROUP {
  WEB = "Web",
  GAME = "Game",
  LAB = "Lab",
  AI = "AI",
  IOS = "iOS",
  ANDROID = "Android",
  MOBILE = "Mobile",
  PM = "PM",
  DESIGN = "Design",
}

export const Group = {
  web: GROUP.WEB,
  lab: GROUP.LAB,
  ai: GROUP.AI,
  game: GROUP.GAME,
  pm: GROUP.PM,
  android: GROUP.ANDROID,
  ios: GROUP.IOS,
  design: GROUP.DESIGN,
  mobile: GROUP.MOBILE,
};

export const DeprecatedGroups = ["android", "ios"];

export const Step = {
  SignUp: "报名",
  WrittenTest: "笔试/问卷",
  GroupTimeSelection: "组面时间选择",
  GroupInterview: "组面",
  StressTest: "熬测",
  TeamTimeSelection: "群面时间选择",
  TeamInterview: "群面",
  Pass: "通过",
} as const;

export const StepEn = {
  SignUp: "Sign Up",
  WrittenTest: "Written Test",
  GroupTimeSelection: "Group Interview Time Selection",
  GroupInterview: "Group Interview",
  StressTest: "Stress Test",
  TeamTimeSelection: "Team Interview Time Selection",
  TeamInterview: "Team Interview",
  Pass: "Pass",
} as const;

export const Period = {
  morning: "上午",
  afternoon: "下午",
  evening: "晚上",
};

export const PeriodEn = {
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
};

export const InterviewPlace = {
  web: "811",
  lab: "810",
  ai: "810",
  game: "808",
  pm: "809",
  android: "808",
  ios: "808",
  mobile: "808",
  design: "809",
};

export const RecruitmentNameEn = {
  A: "Fall Recruitment",
  C: "Summer Camp",
  S: "Spring Recruitment",
};

export const RecruitmentName = {
  A: "秋季招新",
  S: "春季招新",
  C: "夏令营招新",
};

export const GRADE = ["大一", "大二", "大三", "大四", "研究生"] as const;

export const GRADE_EN = [
  "Freshman",
  "Sophomore",
  "Junior",
  "Senior",
  "Graduate",
] as const;

export const RANK = ["暂无", "10%", "25%", "50%", "100%"] as const;

export const RANK_EN = ["None yet", "10%", "25%", "50%", "100%"] as const;

export const GENDERS = ["男", "女", "其他"] as const;

export const GENDERS_EN = ["male", "female", "other"] as const;

//ly：this part may change, could we get info from hust official
export const DEPARTMENTS = {
  电子信息与通信学院: [
    "通信工程",
    "电子信息工程",
    "电子信息工程（电信卓越计划实验班）",
    "电磁场与无线技术",
    "电子信息工程（信息类数理提高班）",
  ],
  基础医学院: [
    "基础医学",
    "临床医学",
    "临床医学（启明本硕博）",
    "医学影像学",
    "医学检验技术",
    "临床医学（八年）",
  ],
  医药卫生管理学院: ["公共事业管理", "信息管理和信息系统"],
  土木工程与力学学院: [
    "土木工程",
    "土木类",
    "工程管理",
    "工程力学",
    "交通工程",
    "土木工程（卓越）",
  ],
  计算机科学与技术学院: [
    "计算机科学与技术",
    "大数据科学与技术",
    "智能科学与技术",
    "物联网工程",
    "计算机科学与技术（卓越）",
    "计算机科学与技术（本硕博）",
  ],
  光学与电子信息学院: [
    "光电信息科学与工程（卓越）",
    "光电信息科学与工程",
    "电子信息类",
    "光电信息科学与工程（王大珩）",
  ],
  生命科学与技术学院: [
    "生物医学工程",
    "生物医学工程（卓越）",
    "生物科学",
    "生物制药",
    "生物信息学",
    "生物科学（生贝）",
    "生物技术（实验）",
  ],
  电气与电子工程学院: [
    "电气工程及其自动化",
    "电气工程及其自动化（本硕博）",
    "电气工程及其自动化（卓越）",
  ],
  机械科学与工程学院: [
    "工业工程",
    "机械设计制造及其自动化",
    "产品设计",
    "机械设计制造及其自动化（卓越）",
    "机械设计制造及其自动化（本硕博）",
  ],
  第二临床学院: [
    "临床医学（启明本硕博）",
    "临床医学（八年）",
    "临床医学（五年）",
    "儿科学",
    "中西医临床医学",
  ],
  管理学院: [
    "信息管理与信息系统",
    "财政学",
    "会计学",
    "工商管理",
    "财务管理",
    "物流管理",
    "市场营销",
  ],
  新闻与信息传播学院: [
    "新闻学",
    "传播学",
    "播音与主持艺术",
    "广告学",
    "广播电视学",
  ],
  外国语学院: ["英语", "翻译", "德语", "法语", "日语"],
  能源与动力工程学院: [
    "能源与动力工程",
    "新能源科学与工程",
    "能源动力类",
    "能源与动力工程（卓越）",
    "核工程与核技术",
    "能源与动力工程（本硕博）",
  ],
  软件学院: ["软件工程"],
  环境科学与工程学院: [
    "建筑环境与能源应用工程",
    "环境工程",
    "给排水科学与工程（卓越）",
    "给排水科学与工程",
  ],
  建筑与城市规划学院: [
    "城乡规划",
    "建筑学",
    "建筑学（实验）",
    "风景园林",
    "环境设计",
    "数字媒体艺术",
  ],
  护理学院: ["护理学"],
  船舶与海洋工程学院: ["船舶与海洋工程", "轮机工程"],
  人工智能与自动化学院: [
    "自动化",
    "自动化（创新实验班）",
    "人工智能",
    "人工智能（实验）",
    "人工智能（本硕博）",
  ],
  材料科学与工程学院: [
    "材料成型及控制工程",
    "材料成型及控制工程（卓越）",
    "材料成型及控制工程（本硕博）",
    "材料类",
    "材料科学与工程",
  ],
  化学与化工学院: ["化学", "应用化学"],
  未来技术学院: [
    "机械工程",
    "光电信息科学与工程",
    "自动化与人工智能",
    "生物医学工程",
  ],
  集成电路学院: [
    "集成电路设计与集成系统",
    "微电子科学与工程",
    "电子科学与技术",
    "集成电路设计与集成系统（卓越）",
  ],
  物理学院: ["应用物理学", "物理学（严济慈）", "物理学"],
  航空航天学院: ["飞行器设计与工程", "工程力学", "工程力学（拔尖）"],
  第一临床学院: [
    "临床医学",
    "临床医学（启明本硕博）",
    "医学影像学",
    "医学检验技术",
    "临床医学（八年）",
  ],
  经济学院: [
    "国际商务+英语",
    "经济学（实验）",
    "经济学（创新实验）",
    "国际经济与贸易",
    "金融学",
    "金融工程",
    "经济统计学",
  ],
  社会学院: ["社会学", "社会工作"],
  人文学院: ["汉语言文学", "汉语国际教育"],
  药学院: ["药学（基地）", "药学", "药学（实验）"],
  公共管理学院: ["公共事业管理", "行政管理"],
  法学院: ["法学"],
  水电与数字化工程学院: ["水利水电工程"],
  公共卫生学院: ["预防医学（本硕博）", "预防医学（五年）"],
  哲学系: ["哲学"],
  数学与统计学院: ["数学类", "信息与计算科学", "统计学", "数学与应用数学"],
  法医学系: ["法医学"],
  网络空间安全学院: ["未分流", "信息安全", "网络空间安全", "密码学"],
} as const;

//todo: translation
//translation of the part below is too hard:(
export const DEPARTMENTS_EN = {
  电子信息与通信学院: [
    "通信工程",
    "电子信息工程",
    "电子信息工程（电信卓越计划实验班）",
    "电磁场与无线技术",
    "电子信息工程（信息类数理提高班）",
  ],
  基础医学院: [
    "基础医学",
    "临床医学",
    "临床医学（启明本硕博）",
    "医学影像学",
    "医学检验技术",
    "临床医学（八年）",
  ],
  医药卫生管理学院: ["公共事业管理", "信息管理和信息系统"],
  土木工程与力学学院: [
    "土木工程",
    "土木类",
    "工程管理",
    "工程力学",
    "交通工程",
    "土木工程（卓越）",
  ],
  计算机科学与技术学院: [
    "计算机类（未分流）",
    "计算机科学与技术",
    "物联网工程",
    "计算机科学与技术（卓越）",
    "计算机科学与技术（本硕博）",
    "大数据科学与技术",
    "智能科学与技术",
  ],
  光学与电子信息学院: [
    "光电信息科学与工程（卓越）",
    "光电信息科学与工程",
    "电子信息类",
    "光电信息科学与工程（王大珩）",
  ],
  生命科学与技术学院: [
    "生物医学工程",
    "生物医学工程（卓越）",
    "生物科学",
    "生物制药",
    "生物信息学",
    "生物科学（生贝）",
    "生物技术（实验）",
  ],
  电气与电子工程学院: [
    "电气工程及其自动化",
    "电气工程及其自动化（本硕博）",
    "电气工程及其自动化（卓越）",
  ],
  机械科学与工程学院: [
    "工业工程",
    "机械设计制造及其自动化",
    "产品设计",
    "机械设计制造及其自动化（卓越）",
    "机械设计制造及其自动化（本硕博）",
  ],
  第二临床学院: [
    "临床医学（启明本硕博）",
    "临床医学（八年）",
    "临床医学（五年）",
    "儿科学",
    "中西医临床医学",
  ],
  管理学院: [
    "信息管理与信息系统",
    "财政学",
    "会计学",
    "工商管理",
    "财务管理",
    "物流管理",
    "市场营销",
  ],
  新闻与信息传播学院: [
    "新闻学",
    "传播学",
    "播音与主持艺术",
    "广告学",
    "广播电视学",
  ],
  外国语学院: ["英语", "翻译", "德语", "法语", "日语"],
  能源与动力工程学院: [
    "能源与动力工程",
    "新能源科学与工程",
    "能源动力类",
    "能源与动力工程（卓越）",
    "核工程与核技术",
    "能源与动力工程（本硕博）",
  ],
  软件学院: ["软件工程"],
  环境科学与工程学院: [
    "建筑环境与能源应用工程",
    "环境工程",
    "给排水科学与工程（卓越）",
    "给排水科学与工程",
  ],
  建筑与城市规划学院: [
    "城乡规划",
    "建筑学",
    "建筑学（实验）",
    "风景园林",
    "环境设计",
    "数字媒体艺术",
  ],
  护理学院: ["护理学"],
  船舶与海洋工程学院: ["船舶与海洋工程", "轮机工程"],
  人工智能与自动化学院: [
    "自动化",
    "自动化（创新实验班）",
    "人工智能",
    "人工智能（实验）",
    "人工智能（本硕博）",
  ],
  材料科学与工程学院: [
    "材料成型及控制工程",
    "材料成型及控制工程（卓越）",
    "材料成型及控制工程（本硕博）",
    "材料类",
    "材料科学与工程",
  ],
  化学与化工学院: ["化学", "应用化学"],
  未来技术学院: [
    "机械工程",
    "光电信息科学与工程",
    "自动化与人工智能",
    "生物医学工程",
  ],
  集成电路学院: [
    "集成电路设计与集成系统",
    "微电子科学与工程",
    "电子科学与技术",
    "集成电路设计与集成系统（卓越）",
  ],
  物理学院: ["应用物理学", "物理学（严济慈）", "物理学"],
  航空航天学院: ["飞行器设计与工程", "工程力学", "工程力学（拔尖）"],
  第一临床学院: [
    "临床医学",
    "临床医学（启明本硕博）",
    "医学影像学",
    "医学检验技术",
    "临床医学（八年）",
  ],
  经济学院: [
    "国际商务+英语",
    "经济学（实验）",
    "经济学（创新实验）",
    "国际经济与贸易",
    "金融学",
    "金融工程",
    "经济统计学",
  ],
  社会学院: ["社会学", "社会工作"],
  人文学院: ["汉语言文学", "汉语国际教育"],
  药学院: ["药学（基地）", "药学", "药学（实验）"],
  公共管理学院: ["公共事业管理", "行政管理"],
  法学院: ["法学"],
  水电与数字化工程学院: ["水利水电工程"],
  公共卫生学院: ["预防医学（本硕博）", "预防医学（五年）"],
  哲学系: ["哲学"],
  数学与统计学院: ["数学类", "信息与计算科学", "统计学", "数学与应用数学"],
  法医学系: ["法医学"],
  网络空间安全学院: ["未分流", "信息安全", "网络空间安全", "密码学"],
} as const;

export const TIMELINE_EN = Object.values(StepEn).map((value) => {
  const res = {
    name: value,
    show: true,
  };
  res.name = value;
  if (
    value === "Group Interview Time Selection" ||
    value === "Team Interview Time Selection"
  ) {
    res.show = false;
  }
  return res;
});

export const TIMELINE = Object.values(Step).map((value) => {
  const res = {
    name: value,
    show: true,
  };
  res.name = value;
  if (value === "组面时间选择" || value === "群面时间选择") {
    res.show = false;
  }
  return res;
});

export const AVATARS = [
  "/INTJ.svg",
  "/INTP.svg",
  "/ENTJ.svg",
  "/ENTP.svg",
  "/INFJ.svg",
  "/INFP.svg",
  "/ENFJ.svg",
  "/ENFP.svg",
  "/ISTJ.svg",
  "/ISFJ.svg",
  "/ESTJ.svg",
  "/ESFJ.svg",
  "/ISTP.svg",
  "/ISFP.svg",
  "/ESTP.svg",
  "/ESFP.svg",
];

export const NecessaryInfoTitle = {
  grade: "年级",
  institute: "学院",
  major: "专业",
  rank: "加权",
  group: "意向组别",
  intro: "自我介绍",
} as const;

export const NecessaryInfoTitleEn = {
  grade: "grade",
  institute: "college",
  major: "major",
  rank: "rank",
  group: "intention group",
  intro: "Self introduction",
} as const;
