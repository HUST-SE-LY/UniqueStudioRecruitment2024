<script lang="ts">
  import cx from "clsx";
  import { scale } from "svelte/transition";
  //ly: now i just finished top & bottom props cuz i'm lazy :)
  export let direct: "left" | "right" | "top" | "bottom" = "bottom";
  export let className:string = ""
  export let style:'white'|'black' = 'black'
  let box: HTMLDivElement;
  let showContent = false;
  let timerIn:number;
  let timerOut:number;
  const handleMouseMoveIn = () => {
    clearTimeout(timerOut);
    timerIn = setTimeout(() => {
      showContent = true;
    },300)
  }
  const handleMouseMoveOut = () => {
    clearTimeout(timerIn)
    timerOut = setTimeout(() => {
      showContent = false;
    },500)
  }
</script>

<div role="tooltip" on:mouseenter={handleMouseMoveIn} on:mouseleave={handleMouseMoveOut} bind:this={box} class="relative">
  <slot name="children" />
  {#if showContent}
    <div
      transition:scale
      class={cx([
        "absolute z-[90] rounded-[6px]",
        style === 'black' ? 'shadow-drop' : 'shadow-card',
        direct === "bottom" &&
          "top-[calc(100%_+_12px)]  origin-[top_center] left-[50%] translate-x-[-50%] ",
        direct === 'top' && 'bottom-[calc(100%_+_12px)] origin-[bottom_center] left-[50%] translate-x-[-50%]'
      ])}
    >
      <div class={cx(["border-gray-150  w-fit text-center  text-sm p-[8px_12px] rounded-[6px]",style === 'black' ? 'text-white bg-black' : 'text-black bg-white', className])}>
        <slot name="content" />
      </div>
      <div class={cx(["w-0 h-0 absolute border-[8px] border-transparent ",direct==='bottom' && 'top-[-14px] left-[calc(50%_-_8px)]', direct === 'top' && 'bottom-[-14px] left-[calc(50%_-_8px)] rotate-180', style === 'black' ? 'border-b-black' :'border-b-white'])}></div>
    </div>
  {/if}
</div>
