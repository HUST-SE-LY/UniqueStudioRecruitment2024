<script lang="ts">
  import { Group, InterviewPlace } from "../../../config/const";
  import type { InterviewType } from "../../../types";
  import { t } from "../../../utils/t";

  export let time = "";
  export let group = "";
  export let type: InterviewType;
</script>

{#if time}
  <p class="text-gray-300">请于<span class="text-blue-300">{time}</span></p>
  <p class="text-gray-300">
    于<span class="text-blue-300"
      >启明学院亮胜楼八楼{InterviewPlace[group]}房间</span
    >参加{type === "group" ? `${Group[group]}组面试` : "联创团队群面"}
  </p>
{:else}
  <p class="text-gray-300">{$t('history.groupInterview.noTime')}</p>
{/if}
