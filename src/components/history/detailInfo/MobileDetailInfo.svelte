<script lang="ts">
  import { push } from "svelte-spa-router";
  import { Group, InterviewPlace, Period, Step } from "../../../config/const";
  import type { Application } from "../../../types/application";
  import Button from "../../public/Button.svelte";
  import type { UserStep } from "../../../types";
  import { recruitment } from "../../../stores/recruitment";
  import { userInfo } from "../../../stores/userInfo";
  import { parseTitle } from "../../../utils/parseTitle";
  import { formatDate, formatTime } from "../../../utils/formmatDate";

  export let applicationInfo: Application;
  export let onCancel: () => void;
  export let step: UserStep;
</script>

<div class="w-[270px] p-[20px_16px]">
  <p class="text-center text-[17px] font-[500]">{step}</p>
  {#if step === "报名"}
    <p class="text-[15px] text-text-4 my-[8px] text-center">
      {applicationInfo
        ? `你已经成功报名${parseTitle($recruitment.name)}${
            Group[applicationInfo.group]
          }组，报名结束前你可以随时修改个人信息。点击修改`
        : "填写基础信息、意向组别、简历等用于报名，帮助我们更好地了解你"}
    </p>
    <Button
      highlight
      className="mx-auto w-full rounded-full my-[8px] text-[15px] leading-[36px]"
      onClick={() => push("/user")}
      >{applicationInfo ? "修改" : "填写"}个人信息</Button
    >
  {:else if step === "笔试/问卷"}
    <p class="text-[15px] text-text-4 my-[8px] text-center">
      各组会根据本组情况，设计笔试/问卷，这是联创团队招新的必经环节
    </p>
    <Button
      highlight
      className="mx-auto rounded-full my-[8px] w-full text-[15px] leading-[36px]"
      >查看链接</Button
    >
  {:else if step === "组面时间选择"}
    <p class="text-[15px] my-[8px] text-text-4 text-center">
      组面由意向组别的同学负责面试，请先选择时间
    </p>
    <Button
      highlight
      className="mx-auto rounded-full my-[8px] w-full text-[15px] leading-[36px]"
      >选择组面时间</Button
    >
  {:else if step === "组面"}
    <p class="text-[15px] my-[8px] text-text-4 text-center">
      请于<span class="text-blue-300"
        >{`${formatDate(applicationInfo.interview_allocations_group.date)}${
          Period[applicationInfo.interview_allocations_group.period]
        }${formatTime(
          applicationInfo.interview_allocations_group.start
        )}`}于<span class="text-blue-300"
          >启明学院亮胜楼八楼{InterviewPlace[applicationInfo.group]}房间</span
        >参加{Group[applicationInfo.group]}组面试</span
      >
    </p>
  {/if}
  <Button
    onClick={onCancel}
    className="mx-auto w-full text-[15px] bg-transparent leading-[36px] text-text-3"
    >知道了</Button
  >
</div>
