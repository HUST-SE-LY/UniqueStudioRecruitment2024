<script lang="ts">
  //ly: i have spent so much time on this shit component, WTF!!!
  import type { InterviewTime, Periods, SingleTime } from "../../../types";
  import { formatDate, formatTime } from "../../../utils/formmatDate";
  import cx from "clsx";
  import { slide } from "svelte/transition";
  import arrow from "../../../assets/arrow.svg";
  import { parseInterviewTime } from "../../../utils/parseInterviewTime";
  import CheckBox from "../../../icons/CheckBox.svelte";
  import { onMount } from "svelte";
  import { Message } from "../../../utils/Message";
  import { setInterviewTimes } from "../../../requests/application/setInterviewTimes";
  import { Period, type Group } from "../../../config/const";
  import { t } from "../../../utils/t";

  //ly: type 'SingleTime' is the return-type of backend, type 'InterviewTime' is the useful type when rendering UI
  export let times: SingleTime[] = [];
  export let type: "team" | "group";
  export let aid: string;
  let timeTrees = parseInterviewTime(times);
  let showSelector = false;
  let curDate: string | undefined = undefined;
  let curPeriods: InterviewTime["detail"] | undefined = undefined;
  let curTimes: InterviewTime["detail"][number]["time"] | undefined = undefined;
  export let selectedTimes: string[] = [];
  const handleDateClick = (date: string, detail: InterviewTime["detail"]) => {
    if (curDate === date) {
      curDate = undefined;
      curPeriods = undefined;
      curTimes = undefined;
      return;
    }
    curDate = date;
    curPeriods = detail;
    curTimes = undefined;
  };
  const handlePeriodClick = (detail: InterviewTime["detail"][number]) => {
    curTimes = detail.time;
  };
  const selectTime = (uuid: string) => {
    if (selectedTimes.includes(uuid)) {
      selectedTimes = [...selectedTimes.filter((el) => el !== uuid)];
    } else {
      selectedTimes = [...selectedTimes, uuid];
    }
    setInterviewTimes({
      iids: selectedTimes,
      aid,
      type,
    })
      .then(() => {
        Message.success($t('history.timeSelector.chooseSuccess'));
      })
      .catch(() => {
        Message.error($t('history.timeSelector.chooseFailed'));
      });
  };
  const transferTime = (uuid: string) => {
    const interviewTime = times.find((el) => el.uid === uuid);
    if (interviewTime) {
      const date = formatDate(interviewTime.date);
      const startTime = formatTime(interviewTime.start);
      const endTime = formatTime(interviewTime.end);
      return { date, startTime, endTime };
    }
  };
  const handleOpen = (e: MouseEvent) => {
    e.stopPropagation();
    curDate = undefined;
    curPeriods = undefined;
    curTimes = undefined;

    showSelector = !showSelector;
  };
  onMount(() => {
    function hide() {
      showSelector = false;
    }
    document.addEventListener("click", hide);
    return () => {
      document.removeEventListener("click", hide);
    };
  });
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:click={(e) => e.stopPropagation()} class="w-full select-none relative">
  <div
    on:click={handleOpen}
    class="w-full scrollbar-hidden whitespace-nowrap items-center h-[36px] flex rounded-[10px] leading-[36px] pl-[16px] pr-[24px] border-blue-400 border-[1px] bg-white cursor-pointer"
  >
    <div
      class="flex gap-[8px] flex-nowrap scrollbar-hidden overflow-x-auto overflow-y-hidden"
    >
      {#each selectedTimes as time}
        {#if times.find((el) => el.uid === time)}
          <div
            class="h-[28px] leading-[28px] flex-shrink-0 whitespace-nowrap px-[8px] rounded-[4px] bg-gray-150"
          >
            <span>{transferTime(time)?.date}</span>
            <span
              >({transferTime(time)?.startTime} - {transferTime(time)
                ?.endTime})</span
            >
          </div>
        {/if}
      {/each}
    </div>

    <img
      src={arrow}
      class={cx([
        "absolute right-[8px] transition-all",
        showSelector || "rotate-180",
      ])}
      alt="arrow"
    />
  </div>
  {#if showSelector}
    <div
      transition:slide
      class={cx([
        "absolute w-full p-[8px_16px] left-0 top-[40px] rounded-[8px]",
      ])}
    >
      <div class="flex">
        <div
          class="w-1/3 py-[8px] border-[1px] border-gray-150 bg-white rounded-l-md"
        >
          {#if timeTrees.length === 0}
            <p class="p-[12px_14px]">{$t('history.timeSelector.noTime')}</p>
          {/if}
          {#each timeTrees as { date, detail }}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div
              on:click={() => handleDateClick(date, detail)}
              class={cx([
                "h-[46px] hover:bg-gray-100 cursor-pointer p-[12px_14px] flex items-center",
                curDate === date && "bg-gray-100",
              ])}
            >
              <p class="ml-[8px]">{formatDate(date)}</p>
              <img class="rotate-90 ml-auto" src={arrow} alt="arrow" />
            </div>
          {/each}
        </div>
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        {#if curDate && curPeriods}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div
            transition:slide={{ axis: "x" }}
            class="bg-white py-[8px] w-1/3 border-[1px] border-gray-150"
          >
            {#each curPeriods as period}
              <div
                on:click={() => handlePeriodClick(period)}
                class={cx([
                  "h-[46px] hover:bg-gray-100 cursor-pointer p-[12px_14px] flex items-center",
                  curTimes === period.time && "bg-gray-100",
                ])}
              >
                <p class="ml-[8px] w-full whitespace-nowrap overflow-x-auto">
                  {Period[period.period]}
                </p>
                <img
                  class="rotate-90 ml-auto flex-shrink-0"
                  src={arrow}
                  alt="arrow"
                />
              </div>
            {/each}
          </div>
        {/if}
        {#if curDate && curPeriods && curTimes}
          <div
            transition:slide={{ axis: "x" }}
            class="bg-white py-[8px] w-1/3 border-[1px] rounded-r-md border-gray-150"
          >
            {#each curTimes as time}
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <!-- svelte-ignore a11y-no-static-element-interactions -->
              <div
                on:click={() => selectTime(time.uuid)}
                class="h-[46px] hover:bg-gray-100 cursor-pointer p-[12px_14px] flex items-center"
              >
                <CheckBox isSelected={selectedTimes.includes(time.uuid)} />
                <p class="ml-[8px] w-full whitespace-nowrap overflow-x-auto">
                  {`${formatTime(time.startTime)} - ${formatTime(
                    time.endTime
                  )}`}
                </p>
              </div>
            {/each}
          </div>
        {/if}
      </div>
    </div>
  {/if}
</div>
