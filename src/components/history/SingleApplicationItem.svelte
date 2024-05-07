<script lang="ts">
  import { fly } from 'svelte/transition';
  import {
    ProcessState,
    type Group,
    TIMELINE,
    GROUP,
  } from '../../config/const';
  import ApplicationState from './ApplicationState.svelte';
  import ApplicationTitle from './ApplicationTitle.svelte';
  import TimeLine from './TimeLine.svelte';
  import out from '../../assets/out.svg';
  import DetailInfo from './detailInfo/DetailInfo.svelte';
  import greet from '../../assets/greet.svg';
  import type { ProcessState as ProcessStateType, TimeLineNode, UserStep } from '../../types';
  import Button from '../public/Button.svelte';
  import type { Application } from '../../types/application';
  import { t } from '../../utils/t';
  export let title: string;
  export let group: GROUP | null = null;
  export let step: UserStep;
  export let state: ProcessStateType;
  export let index: number;
  export let applicationInfo: Application = null;
  let showDetail = false;
  $: timeline = $t('history.timeLine') as unknown as TimeLineNode[]
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

  {#if state === $t('history.processState.PROCESSING')}
    {#if showDetail}
      <TimeLine
        items={timeline}
        className="mt-[24px] px-[12px] text-sm"
        currentItem={step}
      />
      <DetailInfo {step} {applicationInfo} />
    {:else if group}
      <p class="text-text-4 mt-[8px]">{$t('history.currentProcess')}：{step}</p>
      <div class="flex">
        <Button
          highlight
          onClick={() => (showDetail = true)}
          className="p-[7px_20px] text-sm ml-auto rounded-full block clear-both"
          >{$t('history.viewDetails')}</Button
        >
      </div>
    {:else}
      <p class="text-text-4 mt-[8px]">{$t('history.notApplyTips')}</p>
      <div class="flex">
        <Button
          highlight
          onClick={() => (showDetail = true)}
          className="p-[7px_20px] text-sm ml-auto rounded-full block clear-both"
          >{$t('history.step.SignUp')}</Button
        >
      </div>
    {/if}
  {:else if state === $t('history.processState.OUT')}
    <p class="text-text-4 mt-[1rem]">
      {$t('history.outTips')}<img class="inline" src={out} alt="out" />
    </p>
  {:else if state === $t('history.processState.OVER')}
    <p class="text-text-4 mt-[1rem]">{$t('history.overTips')}</p>
  {:else if state === $t('history.processState.PASS')}
    <div class="flex items-center mt-[8px] gap-[4px]">
      <p class="text-lg">{$t('history.passTips')}</p>
      <img class="inline" src={greet} alt="欢迎" />
    </div>
  {/if}
</div>
