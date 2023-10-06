<script lang="ts">
  export let isNecessary:boolean = false;
  export let name:string;
  export let content:string
  export let editMode:boolean;
</script>

<div class="flex gap-[1rem] items-center">
  <p class="opacity-50 shrink-0">{isNecessary ? '*' : ''}{name}</p>
  <input disabled={!editMode} placeholder="请输入" class="p-[4px_12px] w-full rounded-[8px] bg-[#FAFAFA] h-[36px] transition-all outline-none focus:border-[1px] focus:border-[#165DFF]" bind:value={content} />
</div>