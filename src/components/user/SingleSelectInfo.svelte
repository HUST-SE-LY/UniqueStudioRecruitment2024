<script lang="ts">
  import { slide } from "svelte/transition";
  import arrow from '/src/assets/arrow.svg'
  import cx from 'clsx'
  export let isNecessary: boolean = false;
  export let name: string;
  export let content: string;
  export let selectItems: string[];
  let showItems = false;
</script>

<div class="flex gap-[1rem] items-center">
  <p class="opacity-50 shrink-0">{isNecessary ? "*" : ""}{name}</p>
  <div class="relative w-full">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      on:click={() => showItems = !showItems}
      class="p-[4px_12px] cursor-pointer relative w-full rounded-[8px] bg-[#FAFAFA] h-[36px] transition-all outline-none focus:border-[1px] focus:border-[#165DFF]"
    >
      {content}
      <img src={arrow} alt="arrow" class={cx(["absolute right-[1rem] top-[50%] h-[16px] translate-y-[-8px] transition-all", showItems ? '' : 'rotate-180'])} />
    </div>
    {#if showItems}
      <div class="absolute z-10 top-[110%] p-[0.75rem_1rem] rounded-[4px] bg-white w-full border shadow-gray-200 shadow-lg left-0" transition:slide>
        {#each selectItems as item, index}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
          <p on:click={() => {content = item; showItems = false}} class="p-[0.5rem_0.75rem] cursor-pointer hover:bg-gray-100">{item}</p>
        {/each}
      </div>
    {/if}
  </div>
</div>
