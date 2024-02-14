<script lang="ts">
  import clsx from "clsx";
  import type { GROUP, Group } from "../../config/const";
  export let title:string;
  export let group:GROUP|null;
</script>

<div class="select-none text-text-1 text-[24px]">
  {title} | <span class={clsx(group || 'text-text-3')}>{group ? `${group}组` : '未选择'}</span>
</div>