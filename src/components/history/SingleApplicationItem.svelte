<script lang="ts">
  import { fly } from "svelte/transition";
  import { ProcessState, type Group, TIMELINE, GROUP } from "../../config/const";
  import ApplicationState from "./ApplicationState.svelte";
  import ApplicationTitle from "./ApplicationTitle.svelte";
  import TimeLine from "./TimeLine.svelte";
  import out from "../../assets/out.svg";
  import DetailInfo from "./detailInfo/DetailInfo.svelte";
  import greet from "../../assets/greet.svg";
  import type { UserStep } from "../../types";
  import Button from "../public/Button.svelte";
  import type { Application } from "../../types/application";
  export let title: string;
  export let group: GROUP|null = null;
  export let step: UserStep;
  export let state: ProcessState;
  export let index: number;
  export let applicationInfo: Application = null
  let showDetail = false;
</script>

<div
  in:fly={{ y: 100 * (index + 1), duration: 500, delay: 500 }}
  out:fly={{ y: 50, duration: 500 }}
  class="rounded-[20px] mt-[1rem] bg-white p-[3rem_4rem] shadow-card"
>
  <div class="flex gap-[0.5rem] items-center">
    <ApplicationTitle {title} {group} />
    <ApplicationState {state} />
  </div>

  {#if state === ProcessState.PROCESSING}
    {#if showDetail}
      <TimeLine
        items={TIMELINE}
        className="mt-[24px] px-[12px] text-sm"
        currentItem={step}
      />
      <DetailInfo  {step} {applicationInfo} />
    {:else}
      {#if group}
      <p class="text-text-4 mt-[8px]">当前流程：{step}</p>
      <div class="flex">
        <Button
          highlight
          onClick={() => showDetail = true}
          className="p-[7px_20px] text-sm ml-auto rounded-full block clear-both"
          >查看详情</Button
        >
      </div>
      {:else}
      <p class="text-text-4 mt-[8px]">联创团队期待你的加入</p>
      <div class="flex">
        <Button
          highlight
          onClick={() => showDetail = true}
          className="p-[7px_20px] text-sm ml-auto rounded-full block clear-both"
          >报名</Button
        >
      </div>
      {/if}

    {/if}
  {:else if state === ProcessState.OUT}
    <p class="text-text-4 mt-[1rem]">
      期待与更强大的你相遇<img class="inline" src={out} alt="out" />
    </p>
  {:else if state === ProcessState.OVER}
    <p class="text-text-4 mt-[1rem]">招新已结束</p>
  {:else if state === ProcessState.PASS}
    <div class="flex items-center mt-[8px] gap-[4px]">
      <p class="text-lg">恭喜你加入了联创团队</p>
      <img class="inline" src={greet} alt="欢迎" />
    </div>
  {/if}
</div>
