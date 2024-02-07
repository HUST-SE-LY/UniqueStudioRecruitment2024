<script lang="ts">
  export let className = "";
  export let highlight:boolean = false;
  export let onClick:() => void = () => {}
  import cx from 'clsx'
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:click={onClick} class={cx(['rounded-[8px] px-[20px] w-fit cursor-pointer hover:opacity-80 transition-all text-center', highlight ? ' bg-blue-400 text-white' : 'bg-[#F3F3F5]', className])}>
  <slot></slot>
</div>