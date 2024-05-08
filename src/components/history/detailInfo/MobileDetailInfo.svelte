<script lang="ts">
  import { push } from 'svelte-spa-router';
  import { Group, InterviewPlace, Period, Step } from '../../../config/const';
  import type { Application } from '../../../types/application';
  import Button from '../../public/Button.svelte';
  import type { UserStep } from '../../../types';
  import { recruitment } from '../../../stores/recruitment';
  import { userInfo } from '../../../stores/userInfo';
  import { parseTitle } from '../../../utils/parseTitle';
  import { formatDate, formatTime } from '../../../utils/formmatDate';
  import { t } from '../../../utils/t';
  import InterviewInfo from './InterviewInfo.svelte';
  import BottomBar from '../../public/BottomBar.svelte';
  import TimeSelector from './TimeSelector.svelte';
  import { getInterviewTimes } from '../../../requests/application/getInterviewTimes';
  import NightTestInfo from './NightTestInfo.svelte';
  let openGroupInterviewTimeSelector = false;
  let openTeamInterviewTimeSelector = false;
  const handleClick = (e) => {
    if (e.target.className.includes('go-user')) {
      push('/user');
    }
  };
  export let applicationInfo: Application;
  let selectedTimes = applicationInfo?.interview_selections?.map(
    (el) => el.uid
  );
  export let onCancel: () => void;
  export let step: UserStep;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<div class="w-[270px] p-[20px_16px]">
  <p class="text-center text-[17px] mb-[12px] font-[500]">{step}</p>
  {#if step === $t('history.step.SignUp')}
    <p class="text-sm text-center" on:click={handleClick}>
      {@html $userInfo.applications[0].recruitment_id === $recruitment.uid
        ? $t('history.mobile.signUpTips', {
            group: Group[$userInfo.applications[0].group],
            recruitment: $parseTitle($recruitment.name),
          })
        : $t('history.mobile.notSignUpTips')}
    </p>
    <Button
      highlight
      className="mx-auto w-full rounded-full my-[8px] text-[15px] leading-[36px]"
      onClick={() => push('/user')}
      >{applicationInfo
        ? $t('history.mobile.change')
        : $t('history.mobile.input')}{$t('header.info')}</Button
    >
  {:else if step === $t('history.step.WrittenTest')}
    <p class="text-[15px] text-text-4 my-[8px] text-center">
      {$t('history.writeTest.tips')}
    </p>
    <Button
      highlight
      className="mx-auto rounded-full my-[8px] w-full text-[15px] leading-[36px]"
      >{$t('history.mobile.viewLink')}</Button
    >
  {:else if step === $t('history.step.GroupTimeSelection')}
    <p class="text-[15px] my-[8px] text-text-4 text-center">
      {$t('history.mobile.groupInterviewTips')}
    </p>
    <Button
      onClick={() => (openGroupInterviewTimeSelector = true)}
      highlight
      className="mx-auto rounded-full my-[8px] w-full text-[15px] leading-[36px]"
      >{$t('history.mobile.selectTime')}</Button
    >
    <!-- svelte-ignore missing-declaration -->
  {:else if step === $t('history.step.GroupInterview')}
    <InterviewInfo
      group={applicationInfo.group}
      time={applicationInfo.interview_allocations_group.uid
        ? `${$formatDate(
            applicationInfo.interview_allocations_group.date
          )}${Period[applicationInfo.interview_allocations_group.period]}${$formatTime(
            applicationInfo.interview_allocations_group.start
          )}`
        : ''}
      type="group"
    />
  {:else if step === $t('history.step.StressTest')}
    <NightTestInfo
      group={applicationInfo.group}
      time={$formatDate($recruitment.stress_test_start) +
        $formatTime($recruitment.stress_test_start)}
    />
  {:else if step === $t('history.step.TeamTimeSelection')}
  {/if}
  <Button
    onClick={onCancel}
    className="mx-auto w-full text-[15px] bg-transparent leading-[36px] text-text-3"
    >{$t('history.mobile.known')}</Button
  >
</div>

<BottomBar
  className="min-h-[300px] px-[16px]"
  show={openGroupInterviewTimeSelector}
  on:close={() => (openGroupInterviewTimeSelector = false)}
>
  {#await getInterviewTimes(applicationInfo.recruitment_id, applicationInfo.group)}
    <p>{$t('history.groupInterviewTimeSelector.loading')}</p>
  {:then res}
    <TimeSelector
      type="group"
      aid={applicationInfo.uid}
      times={res.data}
      bind:selectedTimes
    />
  {/await}
</BottomBar>
