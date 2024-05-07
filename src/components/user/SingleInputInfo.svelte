<script lang="ts">
  import cx from 'clsx'
  import { t } from "../../utils/t";
  export let necessary: boolean = false;
  export let name: string;
  export let content: string;
  export let editMode: boolean = false;
</script>

<div class="flex gap-[1rem] items-center max-lg:my-[1.5rem]">
  <p class="opacity-50 shrink-0">{necessary ? "*" : ""}{name}</p>
  <input
    disabled={!editMode}
    placeholder={editMode ? $t('user.placeholder') : ""}
    class={cx(["p-[4px_12px] w-full rounded-[8px] text-text-1 bg-[#FAFAFA] h-[48px] transition-all outline-none border-[1px] border-transparent focus:border-[#165DFF]", editMode && "bg-transparent border-gray-200"])}
    bind:value={content}
  />
</div>

