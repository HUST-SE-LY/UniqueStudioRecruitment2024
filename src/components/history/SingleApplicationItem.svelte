<script lang="ts">
  import { fade, fly } from "svelte/transition";
  import {
    ProcessState,
    type Group,
    type Step,
    TIMELINE,
  } from "../../config/const";
  import ApplicationState from "./ApplicationState.svelte";
  import ApplicationTitle from "./ApplicationTitle.svelte";
  import TimeLine from "./TimeLine.svelte";
  import DetailInfo from "./detailInfo/DetailInfo.svelte";
  import type { UserStep } from "../../types";
  export let title: string;
  export let group: Group;
  export let step: UserStep;
  export let state: ProcessState;
</script>

<div
  in:fly={{ y: 50, duration: 500, delay: 500 }}
  out:fly={{ y: 50, duration: 500 }}
  class="rounded-[20px] bg-white p-[3rem_4rem] shadow-card"
>
  <div class="flex gap-[0.5rem] items-center">
    <ApplicationTitle {title} {group} />
    <ApplicationState {state} />
  </div>
  {#if state !== ProcessState.OUT}
    <TimeLine
      items={TIMELINE}
      className="mt-[24px] px-[12px] text-sm"
      currentItem={step}
    />
    <DetailInfo step={step}  />
  {/if}
</div>
