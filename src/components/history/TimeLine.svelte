<script lang="ts">
  import cx from "clsx";
  import type { TimeLineNode } from "../../types";
  import Popover from "../public/Popover.svelte";

  export let items: readonly TimeLineNode[];
  export let currentItem: string;
  export let className: string = "";
</script>

<div class={cx(["flex max-sm:hidden w-full items-center gap-[4px]", className])}
>
  {#each items as item, i}
    {#if item.show}
      {#if item.info}
        <Popover direct="top" style="white">
          <div slot="children" class="relative cursor-pointer">
            <div
              class={cx([
                " w-[8px] h-[8px] rounded-full",
                item.name === currentItem ? "bg-blue-400" : "bg-gray-150",
              ])}
            ></div>
            <div class="absolute top-[16px] w-[96px] text-center left-[-44px]">
              {item.name}
            </div>
          </div>
          <p slot="content" class="w-fit min-w-[20ch] text-center">
            {item.info}
          </p>
        </Popover>
      {:else}
        <div class="relative">
          <div
            class={cx([
              " w-[10px] h-[10px] rounded-full",
              item.name === currentItem ? "bg-blue-400" : i < items.findIndex((el) => el.name === currentItem) ? 'bg-blue-400/50' : 'bg-gray-150',
            ])}
          ></div>
          <div class="absolute top-[16px] w-[96px] text-center left-[-44px]">
            {item.name}
          </div>
        </div>
      {/if}

      {#if i !== items.length - 1}
        <div
          class={cx([
            "border-dashed border-[1px]  h-0 w-full",
            i < items.findIndex((el) => el.name === currentItem)
              ? "border-blue-300"
              : "border-blue-dash",
          ])}
        ></div>
      {/if}
    {/if}
  {/each}
</div>

<div class="sm:hidden">
  {#each items as item, i}
    {#if item.show}
      <div class="flex items-center gap-[12px]">
        <div
          class={cx([
            " w-[8px] h-[8px] rounded-full",
            item.name === currentItem ? "bg-blue-400" : i < items.findIndex((el) => el.name === currentItem) ? 'bg-blue-400/50' : 'bg-gray-150',
          ])}
        ></div>
        <p
          class={cx([
            item.name === currentItem ? "text-blue-400" : "text-text-1",
          ])}
        >
          {item.name}
        </p>
      </div>

      {#if i !== items.length - 1}
        <div class="flex">
          <div
            class={cx([
              " h-[48px] w-[1px] ml-[3.5px]",
              i < items.findIndex((el) => el.name === currentItem)
                ? "bg-blue-300"
                : "bg-gray-150",
            ])}
          ></div>
          {#if item.name === currentItem || (i > 0 && items[i - 1].name === currentItem && !items[i - 1].show)}
            <slot />
          {/if}
        </div>
      {/if}
    {/if}
  {/each}
</div>
