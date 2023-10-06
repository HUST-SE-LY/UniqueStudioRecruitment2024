<script lang="ts">
  export let content:string;
  export let highlight:boolean = false;
  import cx from 'clsx'
</script>

<div class={cx(['rounded-[8px] w-fit p-[0.25rem_2rem] cursor-pointer hover:opacity-80 transition-all', highlight ? 'bg-[#0A84FF] text-white' : 'bg-[#F3F3F5]'])}>
  {content}
</div>