<script lang="ts">
  import { InterviewPlace } from "../../../config/const";

  export let time:string;
  export let group:string;
</script>

<p>
  各组会根据本组情况设计熬测，请于<span class="text-blue-300">{time}</span
  >于<span class="text-blue-300">启明学院亮胜楼八楼{InterviewPlace[group]}房间</span>参加联创团队{group}组熬测。
</p>
