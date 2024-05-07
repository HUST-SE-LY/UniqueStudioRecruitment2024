<script lang="ts">
  import { t } from "../../utils/t";
  export let necessary:boolean = false;
  export let name:string;
  export let content:string
  export let editMode:boolean = false;
</script>

<div class="flex gap-[1rem] items-center">
  <p class="opacity-50 shrink-0">{necessary ? '*' : ''}{name}</p>
  <input disabled={!editMode} placeholder={editMode ? $t('user.placeholder') : ""} class="p-[4px_12px] w-full rounded-[8px] text-text-1 bg-[#FAFAFA] h-[36px] transition-all outline-none border-[1px] border-transparent focus:border-[#165DFF]" bind:value={content} />
</div>