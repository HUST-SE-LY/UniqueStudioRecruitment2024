import { ProcessState, ProcessStateEN, RecruitmentName, RecruitmentNameEn, Step, StepEn } from "./const";

export const i18nConstants = {
  "en-US": {
    header: {
      team: "Unique Studio",
      applications: "Applications",
      info: "Personal Information",
      avatar: "Change avatar",
      logout: "Log out",
    },
    history: {
      records: "Application Records",
      viewDetails: "View Details",
      step: StepEn,
      processState: ProcessStateEN,
      recruitmentName: RecruitmentNameEn,
      currentProcess: "current process",
      notApplyTips: "Unique Studio is looking forward to your joining",
      outTips: "Looking forward to meeting a better you",
      passTips: "Congratulations on joining Unique Studio",
      passSubTips: "For other information, please contact the group leader",
      overTips: "Recruitment has ended",
      notSelected: "Not selected",
      signUpTips: {
        changeInfo: "here",
        notSignInTips:
          "Please fill in basic information, intended group, resume, etc. for registration to help us get to know you better. Click {changeInfo} to fill in",
        SignInTips:
          "You have successfully registered for the {recruitment} {group} group. You can modify your personal information at any time before the registration ends. Click {changeInfo} to modify personal information",
      },
      writeTest: {
        writtenTest: "written test/questionnaire",
        tips: "Each group will design a written test/questionnaire based on the situation of the group. This is a necessary step for the Unique Studio to recruit new members.",
        viewLink: "View the latest {writtenTest}",
      },
      timeSelector: {
        chooseSuccess: "Selection succeed",
        chooseFailed: "Selection failed",
        noTime: "There are currently no times to choose from",
      },
      groupInterviewTimeSelector: {
        loading: "Retrieving available times...",
      },
      groupInterview: {
        noTime: "The interview time has not been allocated yet, please wait.",
        tips: "Please attend the {group} group interview at {time} at Room {room}, 8th Floor, Liangsheng Building, Qiming College.",
      },
      stressTest: {
        tips: "Each group will design stress test based on the situation of the group. Please participate in the UniqueStudio {group} group test at {time} in Room {room}, 8th Floor, Liangsheng Building, Qiming College",
      },
      teamInterviewTimeSelector: {
        loading: "Retrieving available times...",
      },
      teamInterview: {
        noTime: "The interview time has not been allocated yet, please wait.",
        tips: "Please attend the Unique Studio team interview at {time} at Room {room}, 8th Floor, Liangsheng Building, Qiming College.",
      },
    },
    user: {
      basicInfo: "basicInfo",
      edit: "edit",
      email: "email",
      recommender: "recommender",
      name: "name",
      gender: "gender",
      grade: "grader",
      college: "college",
      rank: "rank",
      phone: "phone",
      group: "intention group",
      resume: "Attachments & Resume",
      noResume: "No resume yet",
      upload: "Upload Attachment",
      select: "select file",
    },
  },
  "zh-CN": {
    header: {
      team: "联创团队",
      applications: "我的申请",
      info: "个人信息",
      avatar: "更换头像",
      logout: "退出登录",
    },
    history: {
      records: "申请记录",
      viewDetails: "查看详情",
      step: Step,
      processState: ProcessState,
      recruitmentName: RecruitmentName,
      currentProcess: "当前流程",
      notApplyTips: "联创团队期待你的加入",
      outTips: "期待与更强大的你相遇",
      passTips: "恭喜你加入了联创团队",
      passSubTips: "其他信息请与组长沟通",
      overTips: "招新已结束",
      notSelected: "未选择",
      signUpTips: {
        changeInfo: "个人信息",
        notSignInTips:
          "请填写基础信息、意向组别、简历等用于报名，帮助我们更好地了解你。点击填写{changeInfo}",
        SignInTips:
          "你已经成功报名{recruitment}{group}组，报名结束前你可以随时修改个人信息。点击修改{changeInfo}",
      },
      writeTest: {
        writtenTest: "笔试/问卷链接",
        tips: "各组会根据本组情况，设计笔试/问卷，这是联创团队招新的必经环节。",
        viewLink: "查看最新的{writtenTest}",
      },
      timeSelector: {
        chooseSuccess: "选择成功",
        chooseFailed: "选择失败",
        noTime: "暂无可供选择的时间",
      },
      groupInterviewTimeSelector: {
        loading: "获取可供选择的时间中...",
      },
      groupInterview: {
        noTime: "面试时间暂未分配，请等待...",
        tips: "请于{time}于启明学院亮胜楼八楼{room}房间参加{group}组面试",
      },
      stressTest: {
        tips: "各组会根据本组情况设计熬测，请于{time}于启明学院亮胜楼八楼{room}房间参加{group}组熬测",
      },
      teamInterviewTimeSelector: {
        loading: "获取可供选择的时间中...",
      },
      teamInterview: {
        noTime: "面试时间暂未分配，请等待...",
        tips: "请于{time}于启明学院亮胜楼八楼{room}房间参加联创团队群面",
      },
    },
    user: {
      basicInfo: "基本信息",
      edit: "编辑",
      email: "邮箱",
      recommender: "推荐人",
      name: "姓名",
      gender: "性别",
      grade: "年级",
      college: "学院",
      rank: "加权排名",
      phone: "电话",
      group: "意向组别",
      resume: "附件简历",
      noResume: "暂无简历",
      upload: "上传附件",
      select: "选择文件",
    },
  },
} as const;

export type I18nConstants = typeof i18nConstants
