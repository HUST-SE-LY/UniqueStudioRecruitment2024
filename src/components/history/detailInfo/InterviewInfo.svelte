<script lang="ts">
  import type { InterviewType } from "../../../types";

  export let time = "这周";
  export let place = "启明学院";
  export let group = "";
  export let type:InterviewType = "面试"
</script>

<p class="text-gray-300">请于<span class="text-blue-300">{time}</span></p>
<p class="text-gray-300">于<span class="text-blue-300">{place}</span>参加联创团队{group}组{type}</p>