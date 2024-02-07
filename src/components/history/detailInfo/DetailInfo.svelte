<script lang="ts">
  import { push } from "svelte-spa-router";
  import type { TIMELINE } from "../../../config/const";
  import Button from "../../public/Button.svelte";
  import type { UserStep } from "../../../types";
  import TimeSelector from "./TimeSelector.svelte";
  import InterviewInfo from "./InterviewInfo.svelte";
  import greet from "../../../assets/greet.svg";
  import NightTestInfo from "./NightTestInfo.svelte";
  export let step: UserStep;
</script>

<div class="w-full rounded-lg p-[20px_28px] mt-[3rem] bg-blue-100">
  {#if step !== "通过"}
    <p class="font-bold text-lg mb-[1rem]">当前流程：{step}</p>
  {/if}
  {#if step === "报名"}
    <p>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      请填写基础信息、意向组别、简历等用于报名，帮助我们更好地了解你。点击填写<span
        on:click={() => push("/user")}
        class="text-blue-300 underline cursor-pointer">个人信息</span
      >
    </p>
  {:else if step === "笔试/问卷"}
    <p>各组会根据本组情况，设计笔试/问卷，这是联创团队招新的必经环节。</p>
    <p class="mt-[0.5rem]">
      查看最新的<a
        class=" text-blue-300 underline"
        href="www.bilibili.com"
        download>笔试/问卷链接</a
      >
    </p>
  {:else if step === "面试时间选择"}
    <TimeSelector />
  {:else if step === "面试"}
    <InterviewInfo />
  {:else if step === "熬测"}
    <NightTestInfo />
  {:else if step === "群面时间选择"}
    <TimeSelector />
  {:else if step === "群面"}
    <InterviewInfo type="群面" />
  {:else if step === "通过"}
    <div class="flex items-center gap-[4px]">
      <p class="text-lg">恭喜你加入了联创团队</p>
      <img class="inline" src={greet} alt="欢迎" />
    </div>
    <p class="text-gray-300 mt-[8px]">其他信息请与组长沟通</p>
  {/if}
</div>
{#if step === "报名"}
  <Button
    highlight
    className="w-[102px] h-[36px] text-sm text-center leading-[36px]  rounded-full text-white mt-[1rem] float-right"
    >报名</Button
  >
{/if}
{#if step !== "通过"}
  <Button
    highlight
    className="w-[102px] h-[36px] text-sm text-center leading-[36px]  rounded-full text-white mt-[1rem] float-right"
    >更新信息</Button
  >
{/if}
