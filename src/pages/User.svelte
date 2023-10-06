<script>
  import { fade, fly } from "svelte/transition";
  import UserInfoTitle from "../components/user/UserInfoTitle.svelte";
  import SingleInputInfo from "../components/user/SingleInputInfo.svelte";
  import SingleSelectInfo from "../components/user/SingleSelectInfo.svelte";
  let name = "ccq";
  let gender = "男";
  let grade = "大一"
  let college = "软件学院"
  let major = "软件工程"
  let gpa = "前100%"
  let group = "Web"
</script>

<div class="h-full w-[60%] mx-auto flex flex-col">
  <p in:fade out:fade class="text-[26px] text-white">个人信息</p>
  <div
    in:fly={{ y: 50, duration: 500, delay: 500 }}
    out:fly={{ y: 50, duration: 500 }}
    class="w-[full] my-[1rem] bg-white rounded-[20px] p-[30px_60px]"
  >
    <UserInfoTitle title="基本信息" />
    <div class="grid grid-cols-2 mb-[2rem] w-full gap-[2rem]">
      <SingleInputInfo isNecessary name="姓名" bind:content={name} />
      <SingleSelectInfo
        isNecessary
        name="性别"
        bind:content={gender}
        selectItems={["男", "女", "其他"]}
      />
      <SingleSelectInfo
        isNecessary
        name="年级"
        bind:content={grade}
        selectItems={["大一", "大二", "大三", "大四", "研究生"]}
      />
      <SingleInputInfo isNecessary name="学院" bind:content={college} />
      <SingleInputInfo isNecessary name="专业" bind:content={major} />
      <SingleSelectInfo
        isNecessary
        name="加权"
        bind:content={gpa}
        selectItems={["前10%", "前20%", "前50%", "前100%", "未知"]}
      />
      <SingleInputInfo isNecessary name="电话" bind:content={major} />
      <SingleInputInfo isNecessary name="邮箱" bind:content={major} />
      <SingleInputInfo name="推荐人" bind:content={major} />
      <SingleSelectInfo
        isNecessary
        name="意向组别"
        bind:content={group}
        selectItems={["AI","Android", "Design", "Game","iOS", "Lab", "PM", "Web"]}
      />
      <div class="flex col-span-2 gap-[1rem]">
        <p class="shrink-0 opacity-50 mt-[0.75rem]">*自我介绍</p>
        <textarea placeholder="请输入" class="w-full transition-all outline-none focus:border-[1px] focus:border-[#165DFF] resize-none rounded-[8px] p-[0.75rem_1rem] bg-[#FAFAFA] h-[10rem]"></textarea>
      </div>
      <div class="col-span-2">
        <SingleInputInfo isNecessary name="掌握技能" bind:content={major} />
      </div>

    </div>
    <div class="w-full h-[1px] mb-[2rem] bg-[#E5E6EB]" />
    <UserInfoTitle title="附件简历" />
    <div class="flex justify-center bg-[#FAFAFA] rounded-[1rem] py-[2rem] items-center flex-col gap-[1rem]">
      <p class="font-bold text-lg">上传简历</p>
      <div class="cursor-pointer border-[1px] border-[#0A84FF] text-[#0A84FF] p-[0.5rem_2rem] hover:bg-[#0A84FF] hover:text-white transition-all rounded-[0.5rem]">选择文件</div>
      <input type="file" class="hidden" />
    </div>
  </div>
</div>
