<script lang="ts">
  import type { Periods } from "../../../types";
  import { formatDate } from "../../../utils/formmatDate";
  import { transferPeriod } from "../../../utils/transferPeriod";
  import checkedBox from "../../../assets/checkedBox.svg";
  import cx from "clsx";
  import checkbox from "../../../assets/checkbox.svg";
  import { slide } from "svelte/transition";
  import Button from "../../public/Button.svelte";
  interface SingleTime {
    date: string;
    period: "morning" | "afternoon" | "evening";
  }
  export let times: SingleTime[] = [
    {
      date: "2023-01-25T00:21:45.316409+08:00",
      period: "evening",
    },
    {
      date: "2023-01-25T00:21:45.316409+08:00",
      period: "morning",
    },
    {
      date: "2023-01-25T00:21:45.316409+08:00",
      period: "afternoon",
    },
    {
      date: "2023-01-26T00:21:45.316409+08:00",
      period: "morning",
    },
    {
      date: "2023-01-27T00:21:45.316409+08:00",
      period: "morning",
    },
    {
      date: "2023-01-28T00:21:45.316409+08:00",
      period: "morning",
    },
    {
      date: "2023-01-29T00:21:45.316409+08:00",
      period: "morning",
    },
    {
      date: "2023-01-30T00:21:45.316409+08:00",
      period: "morning",
    },
    {
      date: "2023-01-31T00:21:45.316409+08:00",
      period: "morning",
    },
  ];
  let timeMap = new Map<string, Periods[]>();
  times.forEach((time) => {
    timeMap.has(formatDate(time.date))
      ? timeMap.set(formatDate(time.date), [
          time.period,
          ...(timeMap.get(formatDate(time.date)) as Periods[]),
        ])
      : timeMap.set(formatDate(time.date), [time.period]);
  });
  let showSelector = false;
</script>

<div class="w-full relative">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    on:click={() => {
      showSelector = !showSelector;
    }}
    class="w-full h-[36px] rounded-[10px] leading-[36px] px-[16px] border-blue-400 border-[1px] bg-white cursor-pointer"
  >
    点击查看和选择面试时间
  </div>
  {#if showSelector}
    <div
      transition:slide
      class={cx([
        "absolute w-full bg-white p-[32px_16px] left-0 top-[40px] rounded-[8px]",
      ])}
    >
      <div class="flex flex-wrap gap-[2rem]">
        {#each timeMap as [date, periods]}
          <div class="group">
            <div
              class="bg-blue-100 group-hover:bg-blue-300 group-hover:text-white transition-all rounded-[11px] w-[99px] p-[8px_16px] text-center"
            >
              {date}
            </div>
            <div class="mt-[8px] h-[96px] rounded-[11px] py-[12px] bg-blue-100">
              {#each periods as period}
                <div class="flex gap-[8px] items-center mx-auto w-fit">
                  <img class="cursor-pointer" src={checkedBox} alt="checkBox" />
                  <p>{transferPeriod(period)}</p>
                </div>
              {/each}
            </div>
          </div>
        {/each}
      </div>
      <Button highlight className="float-right mt-[3rem] w-[104px] text-center p-0 h-[32px] text-xs leading-[32px]">确认</Button>
    </div>
  {/if}
</div>
